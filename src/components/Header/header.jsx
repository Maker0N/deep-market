import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
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
      <li className="nav-item">
        <Link to="/admin" className="nav-link">Admin</Link>
      </li>
      <li className="nav-item">
        <Link to="/auth/login" className="nav-link">Login</Link>
      </li>
    </ul>
  </header>
)

export default Header
