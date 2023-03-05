import React, { useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { CartEmpty } from '../../components/CartEmpty/CartEmpty'
import { CartItems } from '../../components/CartItem/CartItems'
import { getProductsCart } from '../../redux/slices/cartSlice'
import styles from './CartPage.module.scss'
import useDocumentTitle from '../../hooks/useDocumentTitle'

export const CartPage = () => {
  useDocumentTitle('Кошик')
  const { products, responseStatus } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsCart())
  }, [])

  if (products.length <= 0) return <CartEmpty />
  const totalPrice = products.reduce((sum, obj) => {
    return obj.price * obj.count + sum
  }, 0)
  return (
    <div className='container'>
      {responseStatus === 'pending' ? (
        <Oval
          height={30}
          width={30}
          color='#1f1d1d'
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          wrapperClass=''
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor='#000'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <div className={styles.cartItems}>
          {products.map((product, index) => (
            <CartItems
              {...product}
              key={index}
            />
          ))}
        </div>
      )}
      <p className={styles.totalPrice}>
        <strong>До сплати</strong>: {totalPrice} грн.
      </p>
    </div>
  )
}
