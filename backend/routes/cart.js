import express from 'express'
import {
  getCartItems,
  addToCart,
  removeCartItem,
  updateCountCartPlus,
  updateCountCartMinus,
} from '../controllers/cartController.js'
const router = express.Router()

//Получение всех продуктов
router.get('/cart', getCartItems)

//Добавление товара в корзину
router.post('/cart', addToCart)

//уменьшить счетчик в корзине
router.put('/cart/minus/:id', updateCountCartMinus)
//увеличить счетчик в корзине
router.put('/cart/plus/:id', updateCountCartPlus)

//Удаление товара из корзины
router.delete('/cart/:id', removeCartItem)

export default router
