import React from 'react'
import styles from './CartEmpty.module.scss'
import { Link } from 'react-router-dom'

export const CartEmpty = () => {
  return (
    <div className={styles.cartEmpty}>
      <div className={styles.cartEmptyIcon}>
        <img
          src='./img/cart-empty.png'
          alt='empty'
        />
      </div>

      <h2>
        Кошик порожній <span>😕</span>
      </h2>
      <p>
        Найімовірніше, ви не замовляли ще піцу. <br />
        Щоб замовити піцу, перейди на головну сторінку.{' '}
      </p>
      <Link to='/'>
        <div className={styles.button}>
          <span>Назад</span>
        </div>
      </Link>
    </div>
  )
}
