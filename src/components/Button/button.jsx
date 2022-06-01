import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  buttonName, buttonAction, buttonClass,
}) => (
  <button
    type="button"
    className={buttonClass}
    onClick={() => buttonAction()}
  >
    {buttonName}
  </button>
)

Button.defaultProps = {
  buttonAction: undefined,
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonAction: PropTypes.func,
  buttonClass: PropTypes.string.isRequired,
  // arg: PropTypes.any.isRequired,
}

export default Button
