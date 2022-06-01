/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
// import Button from '../../Button/button'

const TableBody = ({ products, columns }) => {
  const renderContent = (prod, column) => {
    if (columns[column].component) {
      const { component } = columns[column]
      return component(prod._id)
    }
    return prod[columns[column].path]
  }

  return (
    <tbody>
      {products.map((prod) => (
        <tr key={prod._id}>
          {Object.keys(columns).map((column) => (
            <td key={column} className="small">{renderContent(prod, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  products: PropTypes
    .arrayOf(PropTypes
      .objectOf(PropTypes
        .oneOfType([PropTypes.number, PropTypes.string, PropTypes.objectOf(PropTypes.number)])))
    .isRequired,
  columns: PropTypes
    .objectOf(PropTypes
      .objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func]))).isRequired,
}

export default TableBody
