import mongoose from 'mongoose'

const avatarUploadSchema = new mongoose.Schema(
  {
    socialAvatar: {
      type: String,
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BandMember',
    },
  },
  { versionKey: false }
)

export default mongoose.model('SocialUpload', avatarUploadSchema)
