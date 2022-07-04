import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeAuthData, updateUserCart } from '../../services/localStorage.service'
import { logOut } from '../../redux/authReducer'
import addCart, { getCart } from '../../services/userCart.service'
import { getCartFromDb } from '../../redux/cartReducer'

const Header = () => {
  const dispatch = useDispatch()
  // const cartId = localStorage.getItem('cartId')
  const userId = localStorage.getItem('user-local-id')

  const {
    isLogged, name, avatar, isAdmin,
  } = useSelector((s) => s.authReducer)
  const { cart } = useSelector((s) => s.cartReducer)
  let cartTotalItems
  if (cart.length && isLogged) {
    cartTotalItems = cart.reduce((acc, rec) => acc + rec.count, 0)
  }

  const cartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="32" height="32" fill="currentColor" className="fa-solid fa-cart-shopping">
      <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
    </svg>
  )

  const handleLogOut = () => {
    addCart(cart)
    removeAuthData()
    dispatch(logOut())
  }

  useEffect(async () => {
    const [userCart] = await getCart(userId)
    if (userCart) {
      updateUserCart(userCart.userCart)
      dispatch(getCartFromDb(userCart.userCart))
    }
  }, [userId])

  return (
    <header className="d-flex justify-content-between sticky-top bg-light">
      <ul className="nav">
        <li className="nav-item mt-1">
          <Link to="/" className="nav-link active" aria-current="page">Market</Link>
        </li>
        <li className="nav-item mt-1">
          <Link to="/product" className="nav-link">Product</Link>
        </li>
        <li className="nav-item mt-1">
          <Link to="/cart" className="nav-link position-relative">
            {cartIcon}
            {isLogged && cartTotalItems
              ? (
                <span className="position-absolute top-40 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartTotalItems}
                </span>
              )
              : null}
          </Link>
        </li>
      </ul>
      <ul className="nav">
        {isAdmin && (
        <li className="nav-item">
          <Link to="/admin" className="nav-link">Admin</Link>
        </li>
        )}
        {isLogged
          ? (
            <>
              <li className="d-flex align-items-center nav-item mt-1">
                <div className="badge bg-primary">{`Name: ${name}`}</div>
              </li>
              <li className="nav-item">
                <img
                  className="img-fluid ms-3"
                  style={{ width: '60px' }}
                  src={avatar}
                  alt="ava"
                />
              </li>
              <li className="nav-item mt-1">
                <Link to="/" className="nav-link" onClick={() => handleLogOut()}>LogOut</Link>
              </li>
            </>
          )
          : (
            <li className="nav-item">
              <Link to="/auth/login" className="nav-link">Login</Link>
            </li>
          )}
      </ul>
    </header>
  )
}

export default Header
