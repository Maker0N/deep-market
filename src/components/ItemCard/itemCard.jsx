/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/button'

const ItemCard = ({ item }) => (
  <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-2">
        <img src={item.image} className="img-fluid rounded-start p-1" alt="pic" />
      </div>
      <div className="col-md-10">
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text"><small className="text-muted">{`ID: ${item._id}`}</small></p>
          <div className="d-flex justify-content-between card-text">
            <small className="text-muted">
              {`Price: ${item.price} $`}
            </small>
            <Button buttonClass="btn btn-primary" buttonName="See product" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

ItemCard.propTypes = {
  item: PropTypes
    .objectOf(PropTypes
      .oneOfType([PropTypes.number, PropTypes.string, PropTypes
        .objectOf(PropTypes.number)])).isRequired,
}

export default ItemCard;
