import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export default mongoose.model('User', userSchema)
