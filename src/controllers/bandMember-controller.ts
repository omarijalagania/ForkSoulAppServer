import { Request, Response } from 'express'
import { validateBandMember } from '../schema'
import { BandMember } from '../models'
import mongoose from 'mongoose'

export const addBandMember = async (req: Request, res: Response) => {
  const { error } = validateBandMember(req.body)

  if (error) {
    return res.status(422).send(error.details[0].message)
  }

  try {
    const bandMember = await BandMember.create({
      name: req.body.name,
      instrument: req.body.instrument,
      orbitLength: req.body.orbitLength,
      color: req.body.color,
      biography: req.body.biography,
      avatar: req.body.avatar,
    })
    if (!bandMember) {
      return res.status(422).send('Error adding band member')
    }
    res.status(201).json({ message: 'Band member added' })
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getBandMembers = async (_: Request, res: Response) => {
  try {
    const bandMembers = await BandMember.aggregate([
      {
        $lookup: {
          from: 'uploads',
          localField: '_id',
          foreignField: 'memberId',
          as: 'uploads',
        },
      },
      { $project: { __v: 0 } },
    ])
    if (!bandMembers) {
      res.status(404).send([])
    } else {
      res.status(200).json(bandMembers)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getOneBandMember = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.memberId)) {
    return res.status(422).send('Invalid memberId')
  }

  try {
    const bandMembers = await BandMember.find(
      { _id: req.params.memberId },
      { __v: 0 }
    )
    if (!bandMembers) {
      res.status(404).send([])
    } else {
      res.status(200).json(bandMembers)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const editBandMember = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.memberId)) {
    return res.status(422).send('Invalid memberId')
  }

  const { error } = validateBandMember(req.body)

  if (error) {
    return res.status(422).send(error.details[0].message)
  }

  try {
    const bandMember = await BandMember.updateOne(
      {
        _id: req.params.memberId,
      },
      {
        $set: {
          name: req.body.name,
          instrument: req.body.instrument,
          orbitLength: req.body.orbitLength,
          color: req.body.color,
          biography: req.body.biography,
          avatar: req.body.avatar,
        },
      }
    )
    if (!bandMember) {
      return res.status(404).send([])
    }
    res.status(200).json({ message: 'Band member updated' })
  } catch (error) {
    res.status(500).send(error)
  }
}

export const deleteBandMember = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.memberId)) {
    return res.status(422).send('Invalid memberId')
  }
  try {
    const bandMember = await BandMember.deleteOne({ _id: req.params.memberId })
    if (bandMember) {
      return res.status(200).json({ message: 'Band member deleted' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
