import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/input'
import Button from '../Button/button'
import allowAuth from '../../base/auth'

const AuthReg = () => {
  const [auth, setAuth] = useState({
    login: null,
    password: null,
  })
  const [correctAuth, setCorrectAuth] = useState({})

  console.log(auth, correctAuth)

  const labelLogin = 'LOGIN'
  const labelPass = 'PASSWORD'
  const descriptLogin = 'Insert your login.'
  const descriptPass = 'Your password must be 8-20 characters long.'
  const buttonLogin = 'Login'

  const changeLogin = (target) => {
    setAuth({ ...auth, login: target })
  }

  const changePass = (target) => {
    setAuth({ ...auth, password: target })
  }

  const saveCorrectAuth = (authObj) => {
    if (allowAuth.login === auth.login && allowAuth.password === auth.password) {
      setCorrectAuth(authObj)
    }
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
              getInput={(target) => changeLogin(target)}
            />
            <Input
              label={labelPass}
              descript={descriptPass}
              getInput={(target) => changePass(target)}
            />
            <div className="d-flex justify-content-center">
              <Link to={allowAuth.login === auth.login && allowAuth.password === auth.password
                ? '/' : '/auth'}
              >
                <Button
                  buttonName={buttonLogin}
                  buttonAction={(authObj) => saveCorrectAuth(authObj)}
                  auth={auth}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthReg
