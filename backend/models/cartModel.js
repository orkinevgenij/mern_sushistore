import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cartModel = new Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
})

export default mongoose.model('CartItem', cartModel)
