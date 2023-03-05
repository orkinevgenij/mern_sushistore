import React from 'react'
import styles from './CartItems.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import {
  cartItemCountMinus,
  cartItemCountPlus,
  removeProductCart,
} from '../../redux/slices/cartSlice'

export const CartItems = ({ title, price, imgUrl, weight, quantity, _id, count }) => {
  const dispatch = useDispatch()
  const removeCartItem = id => {
    dispatch(
      removeProductCart({
        id,
      }),
    )
  }

  const onClickPlus = () => {
    const cartItem = { title, price, imgUrl, weight, quantity, _id, count }
    dispatch(cartItemCountPlus({ cartItem }))
  }
  const onClickMinus = () => {
    const cartItem = { title, price, imgUrl, weight, quantity, _id, count }
    if (count > 1) {
      dispatch(cartItemCountMinus({ cartItem }))
    }
  }

  return (
    <div className='container'>
      <div className={styles.cartItem}>
        <div className={styles.imgBlock}>
          <img
            width={50}
            src={imgUrl}
            alt={title}
          />
        </div>
        <div>
          <h4>
            {title}, <span>{quantity} шт</span>
          </h4>
          <p>Ціна: {price} грн.</p>
          <p>Вага: {weight} гр.</p>
          <div className={styles.countBlock}>
            <AiOutlineMinusCircle
              size={30}
              onClick={() => onClickMinus()}
            />
            {count}
            <AiOutlinePlusCircle
              onClick={() => onClickPlus()}
              size={30}
            />
          </div>
          <p>
            <strong>Разом: </strong> {count * price} грн.
          </p>
        </div>
        <AiOutlineDelete
          className={styles.iconRemove}
          onClick={() => removeCartItem(_id)}
          size={30}
        />
      </div>
    </div>
  )
}
