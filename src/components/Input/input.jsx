/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, descript, getInput }) => (
  <>
    <label htmlFor={label} className="form-label mt-3">{label}</label>
    <input
      type={label}
      id={label}
      className="form-control form-control-sm"
      aria-describedby="passwordHelpBlock"
      autoComplete="on"
      onChange={(e) => {
        getInput(e.target.value)
      }}
    />
    <div id="passwordHelpBlock" className="form-text">
      {descript}
    </div>
  </>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  getInput: PropTypes.func.isRequired,
}

export default Input
