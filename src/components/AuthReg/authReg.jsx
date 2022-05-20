/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Input from '../Input/input'
import Button from '../Button/button'
import allowAuth from '../../base/auth'
import { generateUserData } from '../../utils/helpers'

const AuthReg = () => {
  const { loginOrReg } = useParams()
  const [auth, setAuth] = useState({
    login: '',
    password: '',
    name: '',
    avatar: '',
  })
  const [avatar, setAvatar] = useState('https://avatars.dicebear.com/api/bottts/khkl9.svg')

  const labelLogin = 'Login (email)'
  const labelPass = 'Password'
  const descriptLogin = 'Insert your login.'
  const descriptPass = 'Your password must be 8-20 characters long.'
  const buttonLogin = 'Login'

  const changeAuthInput = ({ target }) => {
    setAuth((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleImage = () => {
    const avatarSrc = generateUserData().image
    setAvatar(avatarSrc)
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-50">
        <div className="d-flex justify-content-center">
          <div className="badge bg-primary mt-3">{loginOrReg === 'login' ? 'Authorization' : 'Registration'}</div>
        </div>
        <div className="d-flex justify-content-center">
          <form className="mw-100">
            <Input
              type="input"
              label={labelLogin}
              descript={descriptLogin}
              name="login"
              value={auth.login}
              placeholder="login"
              inputClass="form-control form-control-sm"
              labelClass="fs-4 form-label mt-2"
              descriptclass="fs-6 text-descript text-muted"
              getInput={(target) => changeAuthInput(target)}
            />
            <Input
              type="input"
              label={labelPass}
              descript={descriptPass}
              name="password"
              value={auth.password}
              placeholder="password"
              inputClass="form-control form-control-sm"
              labelClass="fs-4 form-label mt-2"
              descriptclass="fs-6 text-descript text-muted"
              getInput={(target) => changeAuthInput(target)}
            />
            {loginOrReg === 'signin'
              && (
                <>
                  <Input
                    type="input"
                    label="Your name"
                    descript="Enter your name."
                    name="name"
                    value={auth.name}
                    placeholder="name"
                    inputClass="form-control form-control-sm"
                    labelClass="fs-4 form-label mt-2"
                    getInput={(target) => changeAuthInput(target)}
                    descriptclass="fs-6 text-descript text-muted"
                  />
                  <div className="d-flex justify-content-center flex-column mt-3">
                    <img
                      className="img-thumbnail"
                      src={avatar}
                      alt="ava"
                      onClick={handleImage}
                    />
                    <div className="d-flex justify-content-center">
                      <p className="text-muted">Tap to choise avatar</p>
                    </div>
                  </div>
                </>
              )}
            <div className="d-flex justify-content-center mt-3">
              <Link to={allowAuth.login === auth.login && allowAuth.password === auth.password
                ? '/' : '/auth/login'}
              >
                {loginOrReg === 'login'
                && (
                <Button
                  buttonName={buttonLogin}
                  auth={auth}
                  buttonClass={loginOrReg === 'login'
                    ? 'btn btn-primary btn-sm'
                    : 'btn btn-secondary btn-sm'}
                />
                )}
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Link to="/auth/signin">
                <Button
                  buttonName="Registration"
                  auth={auth}
                  buttonClass={loginOrReg === 'login'
                    ? 'btn btn-secondary btn-sm'
                    : 'btn btn-primary btn-sm'}
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
