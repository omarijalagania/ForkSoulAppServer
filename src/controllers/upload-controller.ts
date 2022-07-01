import { Request, Response } from 'express'
import { Upload, SocialUpload } from '../models'

export const avatarUpload = async (req: Request, res: Response) => {
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
