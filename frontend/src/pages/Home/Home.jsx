import React from 'react'
import { useSelector } from 'react-redux'
import { BottomNavbar } from '../../components/BottomNavbar/BottomNavbar'
import { ProductBlock } from '../../components/ProductBlock/ProductBlock'
import { Sort } from '../../components/Sort/Sort'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import styles from './Home.module.scss'

export const Home = () => {
  useDocumentTitle('Головна')

  const { products } = useSelector(state => state.products)

  const productsList = products.map(product => (
    <ProductBlock
      key={product._id}
      {...product}
    />
  ))

  return (
    <>
      <div className='container'>
        <Sort />
        <div className={styles.productsItems}>{productsList}</div>
      </div>
      <BottomNavbar />
    </>
  )
}
