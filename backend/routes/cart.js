import express from 'express'

import {
  getCartItems,
  addToCart,
  removeCartItem,
  updateCountCartPlus,
  updateCountCartMinus,
} from '../controllers/cartController.js'
const router = express.Router()

router.get('/cart', getCartItems)
router.post('/cart', addToCart)
router.put('/cart/minus/:id', updateCountCartMinus)
router.put('/cart/plus/:id', updateCountCartPlus)
router.delete('/cart/:id', removeCartItem)

export default router
