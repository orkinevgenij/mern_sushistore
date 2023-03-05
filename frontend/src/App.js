import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CartPage } from './pages/CartPage/CartPage'
import { Contacts } from './pages/Contacts/Contacts'
import { Home } from './pages/Home/Home'
import { NotFoundPage } from './pages/NotFoundPage'
import { fetchProducts } from './redux/slices/productsSlice'

function App() {
  const { categoryProduct, sortType } = useSelector(state => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    const getProducts = async () => {
      dispatch(fetchProducts({ categoryProduct, sortType }))
    }
    getProducts()
  }, [dispatch, categoryProduct, sortType.property])

  return (
    <div className='wrapper'>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            path=''
            element={<Home />}
          />

          <Route
            path='cart'
            element={<CartPage />}
          />
          <Route
            path='contacts'
            element={<Contacts />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
