/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ columns }) => (
  <>
    <thead>
      <tr>
        {Object.keys(columns).map((col) => (
          <th
            key={col}
            scope="col"
          >
            {columns[col].name}
          </th>
        ))}
      </tr>
    </thead>
  </>
)

TableHeader.propTypes = {
  columns: PropTypes
    .objectOf(PropTypes
      .objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func]))).isRequired,
}

export default TableHeader
