import React, { useState, useEffect } from 'react'
import Input from '../Input/input'
import Button from '../Button/button'
import ItemCard from '../ItemCard/itemCard'

const Market = () => {
  const [products, setProducts] = useState()
  const [cropProductsCategory, setCropProdactsCategory] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  let categories
  if (products) {
    categories = products
      .map((prod) => prod.category)
      .reduce((acc, rec) => (acc.includes(rec) ? acc : [...acc, rec]), [])
  }

  const handleCategory = (cat) => {
    const crop = products.filter((cropCategory) => cropCategory.category === cat)
    setCropProdactsCategory(crop)
    setCategoryName(cat)
  }

  const handleAllAssortment = () => {
    setCategoryName('')
  }

  const buttonSearch = 'Search'
  const onSearch = ({ target }) => {
    setSearch(target.value)
  }

  const clearInput = () => {
    setSearch('')
  }

  const handleSearch = () => {
    if (products) {
      const searchProducts = products.filter((it) => it.title.toLowerCase().includes(search))
      setSearchResult(searchProducts)
      setCategoryName('Search Result')
      clearInput()
    }
  }

  const handleSortUp = () => {
    if (products) {
      const min = products.sort((a, b) => a.price - b.price)
      setProducts(min)
      setCategoryName('min->max')
    }
  }

  const handleSortDown = () => {
    if (products) {
      const max = products.sort((a, b) => b.price - a.price)
      setProducts(max)
      setCategoryName('max->min')
    }
  }

  return (
    <>
      <form className="d-flex mx-3">
        <div className="d-flex w-100">
          <Input
            getInput={onSearch}
            name="search"
            value={search}
            label=""
            descript=""
            placeholder="Search area"
          />
        </div>
        <div className="ms-1">
          <Button buttonName={buttonSearch} buttonAction={handleSearch} />
        </div>
      </form>
      <div className="badge bg-primary mx-3">Market</div>
      <div className="d-flex mx-3 mt-3">
        <nav className="w-25 mh-100 bg-light">
          <div className="d-flex justify-content-center mb-3">
            Category
          </div>
          <ul>
            {products
              ? categories.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="border-0 mb-1"
                    onClick={() => handleCategory(item)}
                  >
                    {item}
                  </button>
                </li>
              ))
              : <div>Loading...</div>}
          </ul>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="border-0"
              onClick={() => handleAllAssortment()}
            >
              All assortment
            </button>
          </div>
        </nav>
        <div className="w-75">
          <div className="bg-light ms-1">
            <button
              type="button"
              className="border-0"
              onClick={() => handleSortUp()}
            >
              Sort by price down
            </button>
            <button
              type="button"
              className="border-0"
              onClick={() => handleSortDown()}
            >
              Sort by price up
            </button>
          </div>
          <section className="bg-light ms-1 mt-1">
            {!categoryName
              ? <div className="d-flex justify-content-center">All assortment</div>
              : <div className="d-flex justify-content-center">{categoryName}</div>}

            {products && categoryName === 'Search Result'
              ? searchResult.map((item) => (
                <article key={item.id}><ItemCard item={item} /></article>
              ))
              : null}

            {categoryName === 'min->max'
              ? products.map((item) => (
                <article key={item.id}><ItemCard item={item} /></article>
              ))
              : null}
            {categoryName === 'max->min'
              ? products.map((item) => (
                <article key={item.id}><ItemCard item={item} /></article>
              ))
              : null}

            {!categoryName && products
              ? products.map((item) => (
                <article key={item.id}><ItemCard item={item} /></article>
              ))
              : cropProductsCategory.map((item) => (
                <article key={item.id}><ItemCard item={item} /></article>
              ))}
          </section>
        </div>
      </div>
    </>
  )
}

export default Market
