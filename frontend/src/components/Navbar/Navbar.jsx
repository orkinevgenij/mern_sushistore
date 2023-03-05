import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const activeStyle = {
    color: 'rgb(255, 106, 0)',
  }
  return (
    <header>
      <Link to='/'>
        <img
          className={styles.logo}
          src='/img/sushi.png'
          alt='logo'
        />
      </Link>
      <ul>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Головна</li>
        </NavLink>
        <NavLink
          to='contacts'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Контакти</li>
        </NavLink>
      </ul>
      <div className={styles.cartIcon}>
        <NavLink to='/cart'>
          <TiShoppingCart size={30} />
        </NavLink>
      </div>
    </header>
  )
}
