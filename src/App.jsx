import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/header'
import Market from './components/Market/market'
import Product from './components/Product/product'
import Cart from './components/Cart/cart'
import AuthReg from './components/AuthReg/authReg'
import Admin from './components/Admin/admin'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/auth/:loginOrReg" component={AuthReg} />
      <Route path="/cart" component={Cart} />
      <Route path="/product" component={Product} />
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Market} />
    </Switch>
  </>
)

export default App
