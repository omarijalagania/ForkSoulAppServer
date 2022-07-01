import { Request, Response } from 'express'
import { BandInfo } from '../models'

export const getBandIfo = async (req: Request, res: Response) => {
  try {
    const bandInfo = await BandInfo.find({}, { __v: 0 })
    if (!bandInfo) {
      res.status(404).send([])
    } else {
      res.status(200).json(...bandInfo)
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const updateBandInfo = async (req: Request, res: Response) => {
  try {
    const bandInfo = await BandInfo.updateOne({
      $set: {
        text: req.body.text,
      },
    })
    if (!bandInfo) {
      return res.status(422).send('Error update band info')
    }
    res.status(201).json({ message: 'Band info updated' })
  } catch (error) {}
}
