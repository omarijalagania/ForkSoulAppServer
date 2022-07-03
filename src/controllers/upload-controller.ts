import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { Upload, SocialUpload, BandAvatar } from '../models'

export const avatarUpload = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.memberId)) {
    return res.status(422).send('Invalid memberId')
  }
  let avatar = req.file
  if (!avatar) {
    return res.status(422).send('No image found')
  }

  try {
    const isExist = await Upload.findOne({ memberId: req.params.memberId })

    if (isExist) {
      const updateExisting = await Upload.findOneAndUpdate(
        { memberId: req.params.memberId },
        { avatar: avatar.path.substring(3) }
      )
      if (!updateExisting) {
        return res.status(422).send('Error updating avatar')
      }
      return res.status(200).json({ message: 'Avatar updated' })
    }

    const avatarUpload = await Upload.create({
      avatar: avatar.path.substring(3),
      memberId: req.params.memberId,
    })

    if (avatarUpload) {
      const uploaded = {
        avatar: avatar.path.substring(3),
        memberId: req.params.memberId,
        _id: avatarUpload._id,
      }
      return res.status(200).json({ uploaded })
    } else {
      return res.status(422).send('Error uploading avatar')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getAvatars = async (req: Request, res: Response) => {
  const memberId = req.params.memberId
  if (!mongoose.Types.ObjectId.isValid(memberId)) {
    return res.status(422).send('Invalid memberId')
  }
  try {
    const avatars = await Upload.find({ memberId: memberId })
    if (avatars) {
      return res.status(200).json({ avatars })
    } else {
      return res.status(422).send('Error getting avatars')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const socialAvatarUpload = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.memberId)) {
    return res.status(422).send('Invalid memberId')
  }
  let socialAvatar = req.file
  if (!socialAvatar) {
    return res.status(422).send('No image found')
  }

  try {
    const isExist = await SocialUpload.findOne({
      memberId: req.params.memberId,
    })

    if (isExist) {
      const updateExisting = await SocialUpload.findOneAndUpdate(
        { memberId: req.params.memberId },
        { socialAvatar: socialAvatar.path.substring(3) }
      )
      if (!updateExisting) {
        return res.status(422).send('Error updating Social avatar')
      }
      return res.status(200).json({ message: 'Social avatar updated' })
    }

    const avatarUpload = await SocialUpload.create({
      socialAvatar: socialAvatar.path.substring(3),
      memberId: req.params.memberId,
    })

    if (avatarUpload) {
      const uploaded = {
        socialAvatar: socialAvatar.path.substring(3),
        memberId: req.params.memberId,
        _id: avatarUpload._id,
      }
      return res
        .status(200)
        .json({ message: 'Social avatar updated', uploaded })
    } else {
      return res.status(422).send('Error uploading Social icon')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getSocialAvatars = async (req: Request, res: Response) => {
  const memberId = req.params.memberId
  if (!mongoose.Types.ObjectId.isValid(memberId)) {
    return res.status(422).send('Invalid memberId')
  }
  try {
    const socialAvatar = await SocialUpload.find({ memberId: memberId })
    if (socialAvatar) {
      return res.status(200).json({ socialAvatar })
    } else {
      return res.status(422).send('Error getting Social avatar')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const bandAvatarUpload = async (req: Request, res: Response) => {
  let bandAvatar = req.file
  let bandId = req.params.bandId
  if (!mongoose.Types.ObjectId.isValid(req.params.bandId)) {
    return res.status(422).send('Invalid bandId')
  }
  if (!bandAvatar) {
    return res.status(422).send('No image found')
  }

  try {
    const isExist = await BandAvatar.findOne({
      bandId: bandId,
    })

    if (isExist) {
      const updateExisting = await BandAvatar.findOneAndUpdate(
        { bandId: bandId },
        { bandAvatar: bandAvatar.path.substring(3) }
      )

      if (!updateExisting) {
        return res.status(422).send('Error updating band avatar')
      }
      return res.status(200).json({ message: 'Band avatar updated' })
    }

    const bandAvatarUpload = await BandAvatar.create({
      bandAvatar: bandAvatar.path.substring(3),
      bandId: bandId,
    })

    if (bandAvatarUpload) {
      const uploaded = {
        bandAvatar: bandAvatar.path.substring(3),
        bandId: bandId,
        _id: bandAvatarUpload._id,
      }

      return res.status(200).json({ message: 'Band avatar updated', uploaded })
    } else {
      return res.status(422).send('Error uploading band icon')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

export const getBandAvatar = async (req: Request, res: Response) => {
  try {
    const bandAvatar = await BandAvatar.find({}, { __v: 0 })
    if (bandAvatar) {
      return res.status(200).json({ bandAvatar })
    } else {
      return res.status(422).send('Error getting band avatar')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
