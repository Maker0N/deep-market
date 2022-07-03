/* eslint-disable no-underscore-dangle */
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../Button/button'
import ItemCard from '../ItemCard/itemCard'

const Cart = () => {
  const history = useHistory()
  const { isLogged } = useSelector((s) => s.authReducer)
  const { cart } = useSelector((s) => s.cartReducer)
  const cartTotalItems = cart.reduce((acc, rec) => acc + rec.count, 0)
  const cartTotalPrice = cart.reduce((acc, rec) => acc + ((rec.price * 100 * rec.count) / 100), 0)
  return (
    <>
      {isLogged
        ? (
          <>
            <div className="badge bg-primary ms-3 mt-2">Cart</div>
            <div className="d-flex mx-3 mt-2">
              <section className="w-75">
                {cart.length
                  ? cart.map((it) => <ItemCard key={it._id} item={it} />)
                  : <article className="bg-light">No item in cart!</article>}
              </section>
              <aside className="ms-1 bg-light w-25 p-2">
                <div className="d-flex justify-content-center">Cart</div>
                <div>{`Total: ${cartTotalItems} pcs.`}</div>
                <div>{`Total price: ${cartTotalPrice} $`}</div>
                <div className="d-flex justify-content-center mt-3">
                  <Button buttonName="Order" buttonClass="btn btn-primary" />
                </div>
              </aside>
            </div>
          </>
        )
        : history.push('/auth/login')}
    </>
  )
}

export default Cart
