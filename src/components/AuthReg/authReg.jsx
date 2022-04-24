import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/input'
import Button from '../Button/button'
import allowAuth from '../../base/auth'

const AuthReg = () => {
  const [auth, setAuth] = useState({
    login: '',
    password: '',
  })

  const labelLogin = 'LOGIN'
  const labelPass = 'PASSWORD'
  const descriptLogin = 'Insert your login.'
  const descriptPass = 'Your password must be 8-20 characters long.'
  const buttonLogin = 'Login'

  const changeAuthInput = ({ target }) => {
    setAuth((prev) => ({ ...prev, [target.name]: target.value }))
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-50">
        <div className="d-flex justify-content-center">
          <div className="badge bg-primary mt-5">Authorization</div>
        </div>
        <div className="d-flex justify-content-center">
          <form className="mw-100">
            <Input
              label={labelLogin}
              descript={descriptLogin}
              name="login"
              value={auth.login}
              placeholder="login"
              getInput={(target) => changeAuthInput(target)}
            />
            <Input
              label={labelPass}
              descript={descriptPass}
              name="password"
              value={auth.password}
              placeholder="password"
              getInput={(target) => changeAuthInput(target)}
            />
            <div className="d-flex justify-content-center mt-3">
              <Link to={allowAuth.login === auth.login && allowAuth.password === auth.password
                ? '/' : '/auth'}
              >
                <Button
                  buttonName={buttonLogin}
                  auth={auth}
                />
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-3">Registration</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthReg
