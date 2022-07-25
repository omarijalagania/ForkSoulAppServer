import { Request, Response } from 'express'
import { BandInfo } from 'models'

export const getBandIfo = async (_: Request, res: Response) => {
  try {
    const bandInfo = await BandInfo.aggregate([
      {
        $lookup: {
          from: 'bandavatars',
          localField: '_id',
          foreignField: 'bandId',
          as: 'bandAvatars',
        },
      },
      { $project: { __v: 0 } },
    ])
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
    res.status(200).json({ message: 'Band info updated' })
  } catch (error) {}
}
