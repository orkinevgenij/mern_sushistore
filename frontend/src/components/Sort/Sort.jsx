import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortProduct } from '../../redux/slices/filterSlice'
import styles from './Sort.module.scss'
const sortItems = [
  { name: 'За популярністю', property: 'rating' },
  { name: 'За ціною', property: 'price' },
  { name: 'За назвою', property: 'title' },
]
export const Sort = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { sortType } = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const sortRef = useRef()

  useEffect(() => {
    const handleClickOutside = e => {
      if (!sortRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const onClickSort = obj => {
    dispatch(setSortProduct(obj))
    setIsOpen(false)
  }

  return (
    <div className='container'>
      <div
        className={styles.sort}
        ref={sortRef}
      >
        <div className={styles.sortLabel}>
          <p>Сортувати:</p>
          <p
            onClick={() => setIsOpen(true)}
            className={styles.sortType}
          >
            {sortType.name}
          </p>
        </div>
        {isOpen && (
          <ul className={styles.sortPopup}>
            {sortItems.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickSort(obj)}
                className={styles.sortPopupItem}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
