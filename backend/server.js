import express from 'express'
import morgan from 'morgan'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import productsRouter from './routes/products.js'
import cartRouter from './routes/cart.js'
const app = express()

config()
mongoose.set('strictQuery', false)
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api', productsRouter)
app.use('/api', cartRouter)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`connected to DB  & listening on port: 4000`))
  })
  .catch(error => {
    console.log(error)
  })
