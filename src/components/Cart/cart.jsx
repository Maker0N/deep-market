/* eslint-disable no-underscore-dangle */
import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Button/button'
import ItemCard from '../ItemCard/itemCard'

const Cart = () => {
  const { cart } = useSelector((s) => s.cartReducer)
  const cartTotalItems = cart.reduce((acc, rec) => acc + rec.quant, 0)
  const cartTotalPrice = cart.reduce((acc, rec) => acc + ((rec.price * 100 * rec.quant) / 100), 0)
  return (
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
}

export default Cart
