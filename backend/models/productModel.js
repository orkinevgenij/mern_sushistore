import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productModel = new Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    recipe: {
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
    rating: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: Number,
      requred: true,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Product', productModel)
