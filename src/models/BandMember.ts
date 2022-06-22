import mongoose from 'mongoose'

const bandMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  orbitLength: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
})

export default mongoose.model('BandMember', bandMemberSchema)
