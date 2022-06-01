import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemCard from '../ItemCard/itemCard'

const Product = () => {
  const { itemId } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${itemId}`)
      .then((res) => res.data)
      .then((data) => setProduct(data))
  }, [])

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json))
  // }, [])

  // let item
  // if (products) {
  //   item = products.find((it) => it.id === Number(itemId))
  // }
  // if (products) {
  //   console.log(item)
  // }
  if (product) {
    return (
      <>
        <div className="badge bg-primary ms-3 mt-2">Product</div>
        <div className="d-flex bg-light mx-3 mt-2">
          <section className="w-100">
            <ItemCard item={product} />
            {/* <article>Item</article>
        <article>Path</article>
        <div className="card mb-3">
          <div className="row g-0 d-flex">
            <div className="col-md-2">
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body w-100">
                <h5 className="card-title">Card title</h5>
                <h5 className="card-title">Description</h5>
                <p className="card-text">Quantity</p>
                <p className="card-text"><small className="text-muted">Price</small></p>
              </div>
            </div>
            <div className="col-md-2">
              <button type="button">Bay</button>
            </div>
          </div>
        </div> */}
          </section>
        </div>
      </>
    )
  }
  return 'Loading...'
}

export default Product
