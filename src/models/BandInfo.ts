import mongoose from 'mongoose'

const bandInfoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
})

export default mongoose.model('BandInfo', bandInfoSchema)
