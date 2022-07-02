import mongoose from 'mongoose'

const uploadSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BandMember',
  },
})

export default mongoose.model('Upload', uploadSchema)
