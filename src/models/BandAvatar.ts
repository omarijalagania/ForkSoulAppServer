import mongoose from 'mongoose'

const bandAvatarSchema = new mongoose.Schema(
  {
    bandAvatar: {
      type: String,
    },
    bandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BandInfo',
    },
  },
  { versionKey: false }
)

export default mongoose.model('BandAvatar', bandAvatarSchema)
