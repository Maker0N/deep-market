import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  buttonName, buttonAction, auth,
}) => (
  <button
    type="button"
    className="btn btn-primary btn-sm"
    onClick={() => buttonAction(auth)}
  >
    {buttonName}
  </button>
)

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
  auth: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default Button
