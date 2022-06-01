import React, { useState } from 'react'
import axios from 'axios'
import Button from '../Button/button'
import AdminTable from './adminTable'
import Input from '../Input/input'
import Textarea from '../Texarea/textarea'

const Admin = () => {
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    count: '',
    rate: '',
    rating: {
      count: 0,
      rate: 0,
    },
  })

  const onChangeNewItem = ({ target }) => {
    let { value } = target
    if (target.type === 'number') {
      value = Number(value)
    }
    setNewProduct((prev) => ({ ...prev, [target.name]: value }))
  }

  const handleAddProduct = () => {
    axios.post('http://localhost:8080/api/products/add', newProduct)
  }

  return (
    <>
      <div className="badge bg-danger mx-3">Admin</div>
      <div className="d-flex mx-3 mt-3">
        <nav className="w-15 mh-100 bg-light card px-2">
          <div className="d-flex justify-content-center my-1">
            Add item
          </div>
          <form>
            <Input
              type="text"
              value={newProduct.title}
              name="title"
              label="Item name"
              inputClass="form-control form-control-sm"
              labelClass="form-label mx-2 mb-0"
              descriptclass=""
              descript=""
              getInput={(target) => onChangeNewItem(target)}
            />
            <Input
              type="number"
              value={newProduct.price}
              name="price"
              label="Item price"
              inputClass="form-control form-control-sm"
              labelClass="form-label mx-2 mb-0"
              descriptclass=""
              descript=""
              getInput={(target) => onChangeNewItem(target)}
            />
            <Textarea
              label="Item description"
              value={newProduct.description}
              name="description"
              inputClass="form-control form-control-sm"
              labelClass="form-label mx-2 mb-0"
              descript=""
              descriptclass=""
              getInput={(target) => onChangeNewItem(target)}
            />
            <Input
              type="text"
              value={newProduct.category}
              name="category"
              label="Item category"
              inputClass="form-control form-control-sm"
              labelClass="form-label mx-2 mb-0"
              descriptclass=""
              descript=""
              getInput={(target) => onChangeNewItem(target)}
            />
            <Input
              type="text"
              value={newProduct.image}
              name="image"
              label="Item image URL"
              inputClass="form-control form-control-sm"
              labelClass="form-label mx-2 mb-0"
              descriptclass=""
              descript=""
              getInput={(target) => onChangeNewItem(target)}
            />
            <Input
              type="number"
              value={newProduct.count}
              name="count"
              label="Item count"
              inputClass="form-control form-control-sm"
              labelClass="form-label mx-2 mb-0"
              descriptclass=""
              descript=""
              getInput={(target) => onChangeNewItem(target)}
            />
            <Input
              type="number"
              value={newProduct.rate}
              name="rate"
              label="Item rate"
              inputClass="form-control form-control-sm"
              labelClass="form-label mx-2 mb-0"
              descriptclass=""
              descript=""
              getInput={(target) => onChangeNewItem(target)}
            />
          </form>
          <div className="d-flex justify-content-center">
            <Button
              type="button"
              buttonName="Add item"
              buttonClass="btn btn-danger m-3"
              buttonAction={handleAddProduct}
            />
          </div>
        </nav>
        <div className="w-75">
          <div className="d-flex justify-content-between bg-light ms-1">
            <button
              type="button"
              className="border-0"
            >
              Sort by price down
            </button>
            <button
              type="button"
              className="border-0"
            >
              Sort by price up
            </button>
          </div>
          <AdminTable />
        </div>
      </div>
    </>
  )
}

export default Admin
