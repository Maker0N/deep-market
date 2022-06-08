import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TableHeader from '../common/table/tableHeader'
import TableBody from '../common/table/tableBody'
import Button from '../Button/button'

const AdminTable = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/')
      .then((res) => res.data)
      .then((data) => setProducts(data))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/products/delete/${id}`)
  }

  const columns = {
    _id: { path: '_id', name: 'ID' },
    title: { path: 'title', name: 'Title' },
    price: { path: 'price', name: 'Price Euro' },
    count: { path: 'count', name: 'Count' },
    description: { path: 'description', name: 'Description' },
    category: { path: 'category', name: 'Category' },
    rate: { path: 'rate', name: 'Rate' },
    image: { path: 'image', name: 'Image URL' },
    buttonsPlace: {
      path: 'buttonsPlace',
      name: 'Actions',
      component(itemId) {
        return (
          <div className="d-flex">
            <Button buttonClass="btn btn-primary btn-sm" buttonName="Edit" />
            <Button
              buttonClass="btn btn-danger btn-sm"
              buttonName="Del"
              buttonAction={() => handleDelete(itemId)}
            />
          </div>
        )
      },
    },
  }
  return (
    <table className="table table-striped table-hover table-responsive table-sm align-top">
      <TableHeader columns={columns} />
      {products && <TableBody products={products} columns={columns} />}
    </table>
  )
}

export default AdminTable
