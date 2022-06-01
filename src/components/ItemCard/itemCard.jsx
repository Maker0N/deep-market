/* eslint-disable no-underscore-dangle */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from '../Button/button'

const ItemCard = ({ item }) => {
  const location = useLocation()
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-2">
          <img src={item.image} className="img-fluid rounded-start p-1" alt="pic" />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text"><small className="text-muted">{`ID: ${item._id}`}</small></p>
            {location.pathname === `/product/${item._id}`
              && (
              <>
                <hr />
                <p className="card-text">{item.description}</p>
                <hr />
              </>
              )}

            {location.pathname === `/product/${item._id}`
              && (
              <div className="card-text">
                <small className="text-muted">
                  Category:
                  {' '}
                  {item.category}
                  {' | '}
                  Rating:
                  {' '}
                  {item.rating.rate}
                  {' | '}
                  Count:
                  {' '}
                  {item.rating.count}
                </small>
              </div>
              )}
            <div className="d-flex justify-content-between card-text">
              <h5 className="card-title mt-2">{`Price: ${item.price} $`}</h5>
              <Link to={location.pathname === `/product/${item._id}` ? '/' : `/product/${item._id}`}>
                <Button
                  buttonClass="btn btn-primary"
                  buttonName={location.pathname === `/product/${item._id}` ? 'Back' : 'See product'}
                  buttonAction={null}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  item: PropTypes
    .objectOf(PropTypes
      .oneOfType([PropTypes.number, PropTypes.string, PropTypes
        .objectOf(PropTypes.number)])).isRequired,
}

export default ItemCard
