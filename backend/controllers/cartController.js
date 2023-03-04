import mongoose from 'mongoose'
import cartModel from '../models/cartModel.js'

//Получить все товары из корзины
export const getCartItems = async (req, res) => {
  try {
    const cartItems = await cartModel.find({})
    res.status(200).json(cartItems)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

// Добавить в корзину
export const addToCart = async (req, res) => {
  const { title, imgUrl, price, quantity, weight, _id } = req.body
  const findCartItem = await cartModel.findById({ _id })
  try {
    if (findCartItem == null) {
      const cartItem = await cartModel.create({
        title,
        imgUrl,
        price,
        quantity,
        weight,
        _id,
        count: 1,
      })
      return res.status(200).json(cartItem)
    } else {
      const countUpdate = await cartModel.findByIdAndUpdate(
        { _id: _id },
        { title, imgUrl, price, quantity, weight, _id, $inc: { count: 1 } },
      )
      return res.status(200).json(countUpdate)
    }
  } catch (error) {
    console.log(error)
    return res.status(404).json({ message: error.message })
  }
}

//Удаление из корзины
export const removeCartItem = async (req, res) => {
  const id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such product' })
  }
  const deletetedCartItem = await cartModel.findByIdAndDelete({ _id: id })

  if (!deletetedCartItem) {
    return res.status(404).json({ error: 'No such workout' })
  }
  res.status(200).json(deletetedCartItem)
}
//Увеличить счетчик в корзине

export const updateCountCartPlus = async (req, res) => {
  const { id } = req.params

  const countPlus = await cartModel.findByIdAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { new: true },
  )
  res.status(200).json(countPlus)
}
export const updateCountCartMinus = async (req, res) => {
  const { id } = req.params
  const countMinus = await cartModel.findByIdAndUpdate(
    { _id: id },
    { $inc: { count: -1 } },
    { new: true },
  )
  res.status(200).json(countMinus)
}
