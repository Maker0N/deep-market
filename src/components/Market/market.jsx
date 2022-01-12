import React from 'react'
import Input from '../Input/input'
import Button from '../Button/button'
import ItemCard from '../ItemCard/itemCard'

const Market = () => {
  const buttonSearch = 'Search'
  return (
    <>
      <div className="badge bg-primary mx-3">Market</div>
      <form className="d-flex mx-3">
        <div className="d-flex w-100 mt-3">
          <Input />
        </div>
        <div className="ms-1">
          <Button buttonName={buttonSearch} />
        </div>
      </form>
      <div className="d-flex mx-3 mt-3">
        <nav className="w-25 mh-100 bg-light">Category</nav>
        <div className="w-75">
          <div className="bg-light ms-1">Sort</div>
          <section className="bg-light ms-1 mt-1">
            Items
            <article><ItemCard /></article>
          </section>
        </div>
      </div>
    </>
  )
}

export default Market;
