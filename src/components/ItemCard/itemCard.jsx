/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Button from '../Button/button'
import { addItemToCart } from '../../redux/cartReducer'
import { updateUserCart } from '../../services/localStorage.service'

const ItemCard = ({ item }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { cart } = useSelector((s) => s.cartReducer)
  useEffect(() => {
    updateUserCart(cart)
  }, [cart])

  const [cartItem] = cart.filter((it) => it._id === item._id)

  const handleBuyItem = () => {
    dispatch(addItemToCart(item))
  }

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
                  {item.rate}
                  {' | '}
                  Count:
                  {' '}
                  {item.count}
                </small>
              </div>
              )}
            <div className="d-flex justify-content-between card-text mt-2">
              <div className="d-flex flex-row">
                <h5 className="card-title mt-2">{`Price: ${item.price} $`}</h5>
                {location.pathname === `/product/${item._id}`
                  && (
                  <Button
                    buttonClass="btn btn-primary ms-2"
                    buttonName="Buy"
                    buttonAction={handleBuyItem}
                  />
                  )}
                {cartItem
                  ? (
                    <h5 className="card-title mt-2 ms-3">
                      |
                      {' '}
                      <div className="badge bg-danger ms-2">{`${cartItem.count} pcs.`}</div>
                    </h5>
                  )
                  : (
                    <h5 className="card-title mt-2 ms-3">
                      |
                      {' '}
                      <div className="badge bg-danger ms-2">0 pcs.</div>
                    </h5>
                  )}
              </div>
              <Link to={location.pathname === `/product/${item._id}` ? '/' : `/product/${item._id}`}>
                <Button
                  buttonClass="btn btn-primary"
                  buttonName={location.pathname === `/product/${item._id}` ? 'Back' : 'See product'}
                  buttonAction={() => {}}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ItemCard.defaultProps = {
  item: undefined,
}

ItemCard.propTypes = {
  item: PropTypes
    .objectOf(PropTypes
      .oneOfType([PropTypes.number, PropTypes.string, PropTypes
        .objectOf(PropTypes.number)])),
  // cart: PropTypes
  //   .objectOf(PropTypes
  //     .oneOfType([PropTypes.number, PropTypes.string, PropTypes
  //       .objectOf(PropTypes.number)])),
}

export default ItemCard
