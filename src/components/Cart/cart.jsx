import React from 'react'

const Cart = () => (
  <>
    <div className="bg-light mx-3 mt-2">Search</div>
    <div className="badge bg-primary ms-3 mt-2">Cart</div>
    <div className="d-flex mx-3 mt-2">
      <section className="w-75">
        <article className="bg-light">Item</article>
      </section>
      <aside className="ms-1 bg-light w-25 p-2">
        <div className="d-flex justify-content-center">Cart</div>
        <div>Total:</div>
        <div>Total price:</div>
        <div className="d-flex justify-content-center mt-3">
          <button type="button">Order</button>
        </div>
      </aside>
    </div>
  </>
)

export default Cart
