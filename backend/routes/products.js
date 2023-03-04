import express from 'express'
import { getProducts } from '../controllers/productController.js'

const router = express.Router()

//Получение всех товаров
router.get('/products', getProducts)

export default router
