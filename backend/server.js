import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import productsRouter from './routes/products.js'
import cartRouter from './routes/cart.js'

dotenv.config()

mongoose.set('strictQuery', false)
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', productsRouter)
app.use('/api', cartRouter)

// app.post('/api/products', async (req, res) => {
//   const { title, price } = req.body
//   try {
//     const rolls = await productModel.create({
//       title,
//       price,
//     })
//     return res.status(200).json(rolls)
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// })

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`connected to DB  & listening on port: 4000`))
  })
  .catch(error => {
    console.log(error)
  })

// app.use((req, res) => {
//   res.status(404).send('404', {
//     title: '404',
//   })
// })
