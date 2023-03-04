import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import styles from './Contacts.module.scss'
export const Contacts = () => {
  useDocumentTitle('Контакти')

  return (
    <div className='container'>
      <div className={styles.infoBlock}>
        <h4>Чекаємо на вас:</h4>
        <div className={styles.address}>
          <p>м. Дніпро</p>
          <p>вул. Менахем-Мендл Шнеєрсона</p>
        </div>
        <h3>Зв’язатися з нами:</h3>
        <div className={styles.contacts}>
          <div className={styles.phone}>
            <h3>Телефон:</h3>
            <p>0508585700</p>
          </div>
          <div className={styles.workingHours}>
            <h3>Час роботи:</h3>
            <p>з 09:00 до 21:00 без вихідних</p>
          </div>
        </div>
      </div>
    </div>
  )
}
