import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { SocialNetwork } from '../models'

import { validateSocialNetwork } from '../schema'

export const addSocialNetwork = async (req: Request, res: Response) => {
  const { error } = validateSocialNetwork(req.body)

  if (error) {
    return res.status(422).send(error.details[0].message)
  }

  try {
    const socialNetwork = await SocialNetwork.create({
      name: req.body.name,
      socialLink: req.body.socialLink,
      socialUrl: req.body.socialUrl,
    })
    if (!socialNetwork) {
      return res.status(422).send('Error adding social network')
    }
    res.status(201).json({ message: 'Social network added' })
  } catch (error) {}
}

export const getSocialNetworks = async (_: Request, res: Response) => {
  try {
    const socialNetwork = await SocialNetwork.find({}, { __v: 0 })
    if (!socialNetwork) {
      res.status(404).send([])
    } else {
      res.status(200).json(socialNetwork)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getOneSocialNetwork = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.networkId)) {
    return res.status(422).send('Invalid networkId')
  }
  try {
    const socialNetwork = await SocialNetwork.find(
      { _id: req.params.networkId },
      { __v: 0 }
    )
    if (!socialNetwork) {
      res.status(404).send([])
    } else {
      res.status(200).json(socialNetwork)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const editSocialNetwork = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.socialId)) {
    return res.status(422).send('Invalid socialId')
  }
  const { error } = validateSocialNetwork(req.body)

  if (error) {
    return res.status(422).send(error.details[0].message)
  }
  try {
    const socialNetwork = await SocialNetwork.updateOne(
      {
        _id: req.params.socialId,
      },
      {
        $set: {
          name: req.body.name,
          socialLink: req.body.socialLink,
          socialUrl: req.body.socialUrl,
        },
      }
    )
    if (!socialNetwork) {
      return res.status(404).send([])
    }
    res.status(200).json({ message: 'Social network updated' })
  } catch (error) {
    res.status(500).send(error)
  }
}

export const deleteSocialNetwork = async (req: Request, res: Response) => {
  try {
    const socialNetwork = await SocialNetwork.deleteOne({
      _id: req.params.socialId,
    })
    if (socialNetwork) {
      return res.status(200).json({ message: 'Social network deleted' })
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
