import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/header'
import Market from './components/Market/market'
import Product from './components/Product/product'
import Cart from './components/Cart/cart'
import AuthReg from './components/AuthReg/authReg'
import Admin from './components/Admin/admin'
import './scss/custom.scss'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/auth/:loginOrReg" component={AuthReg} />
      <Route path="/auth/login" component={AuthReg} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:itemId" component={Product} />
      <Route path="/admin" component={Admin} />
      <Route
        path="/"
        render={() => (
          <Market />
        )}
      />
    </Switch>
  </>
)

export default App
