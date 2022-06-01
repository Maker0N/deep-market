/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  type, label, descript, value, name, getInput, inputClass, labelClass, descriptclass,
}) => (
  <>
    <label
      htmlFor={label}
      className={labelClass}
    >
      {label}
    </label>
    <input
      type={type}
      id={label}
      value={value}
      name={name}
      className={inputClass}
      placeholder={name}
      aria-describedby={label}
      autoComplete="off"
      descriptclass={descriptclass}
      descript={descript}
      onChange={(e) => {
        getInput(e)
      }}
    />
    <div id={label} className={descriptclass}>
      {descript}
    </div>
  </>
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  getInput: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  // placeholder: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  descriptclass: PropTypes.string.isRequired,
}

export default Input
