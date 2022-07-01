import mongoose from 'mongoose'

const avatarUploadSchema = new mongoose.Schema({
  socialAvatar: {
    type: String,
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

export default mongoose.model('SocialUpload', avatarUploadSchema)
