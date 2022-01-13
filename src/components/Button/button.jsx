import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  buttonName, buttonAction,
}) => (
  <button
    type="button"
    className="btn btn-primary btn-sm"
    onClick={() => buttonAction()}
  >
    {buttonName}
  </button>
)

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  // arg: PropTypes.any.isRequired,
}

export default Button
