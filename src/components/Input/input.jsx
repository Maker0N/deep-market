/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  label, descript, value, name, placeholder, getInput,
}) => (
  <>
    <label htmlFor={label} className="form-label mt-3">{label}</label>
    <input
      type={label}
      id={label}
      value={value}
      name={name}
      className="form-control form-control-sm"
      placeholder={placeholder}
      aria-describedby={label}
      autoComplete="off"
      onChange={(e) => {
        getInput(e)
      }}
    />
    <div id={label} className="form-text">
      {descript}
    </div>
  </>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  getInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input
