import mongoose from 'mongoose'

const socialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  socialUrl: {
    type: String,
  },
})

export default mongoose.model('SocialNetwork', socialSchema)
