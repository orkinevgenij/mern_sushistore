import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryProduct } from '../../redux/slices/filterSlice'
import styles from './BottomNavbar.module.scss'

const menu = [
  { name: 'Меню', iconMenu: '/img/menu/menu-icon.png' },
  {
    name: 'Ролли',
    iconMenu: '/img/menu/roll.jpg',
  },
  {
    name: 'Суши',
    iconMenu: '/img/menu/sushi.jpg',
  },
  {
    name: 'Сети',
    iconMenu: '/img/menu/set.jpg',
  },
]

export const BottomNavbar = () => {
  const dispatch = useDispatch()
  const { categoryProduct } = useSelector(state => state.filter)
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((menu, index) => {
          return (
            <li
              key={index}
              className={`${categoryProduct === index ? styles.active : null}`}
              onClick={() => dispatch(setCategoryProduct(index))}
            >
              <img
                src={menu.iconMenu}
                alt={menu.name}
              />
              <span>{menu.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
