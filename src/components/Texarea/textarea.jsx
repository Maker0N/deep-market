/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

const Textarea = ({
  label, descript, value, name, getInput, inputClass, labelClass, descriptclass,
}) => (
  <>
    <label
      htmlFor={label}
      className={labelClass}
    >
      {label}
    </label>
    <textarea
      id={label}
      value={value}
      name={name}
      className={inputClass}
      placeholder={name}
      rows="3"
      aria-describedby={label}
      autoComplete="off"
      onChange={(e) => {
        getInput(e)
      }}
    />
    <div id={label} className={descriptclass}>
      {descript}
    </div>
  </>
)

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  getInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  descriptclass: PropTypes.string.isRequired,
}

export default Textarea
