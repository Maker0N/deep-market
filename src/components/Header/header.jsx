import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeAuthData } from '../../services/localStorage.service'
import { logOut } from '../../redux/authReducer'

const Header = () => {
  const dispatch = useDispatch()

  const {
    isLogged, name, avatar, isAdmin,
  } = useSelector((s) => s.authReducer)

  const handleLogOut = () => {
    removeAuthData()
    dispatch(logOut())
  }

  return (
    <header className="d-flex justify-content-between">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Market</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link">Product</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
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
            <li>
              <div className="d-flex align-items-center">
                <span className="badge bg-primary">{`Name: ${name}`}</span>
                <img
                  className="img-fluid ms-3"
                  style={{ width: '50px' }}
                  src={avatar}
                  alt="ava"
                />
                <Link to="/" className="nav-link" onClick={() => handleLogOut()}>LogOut</Link>
              </div>
            </li>
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
