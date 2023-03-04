import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsCart, postProductToCart } from '../../../src/redux/slices/cartSlice'
import styles from './Product.module.scss'
import { useNavigate } from 'react-router-dom'

export const ProductBlock = ({ title, imgUrl, price, quantity, weight, _id, count }) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    const products = { title, imgUrl, price, quantity, weight, _id }
    dispatch(postProductToCart({ products }))
  }

  return (
    <div className={styles.productBlock}>
      <div className={styles.imgBlock}>
        <img
          src={imgUrl}
          alt={title}
        />
      </div>
      <h3>
        {title}, <span>{quantity} шт</span>
      </h3>
      <p className={styles.weight}>Вага: {weight} гр.</p>
      <p className={styles.price}>Ціна: {price} грн.</p>
      <div
        onClick={addToCart}
        className={styles.button}
      >
        <span>+ В кошик</span>
      </div>
    </div>
  )
}
