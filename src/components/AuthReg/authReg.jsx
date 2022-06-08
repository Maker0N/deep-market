/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Input from '../Input/input'
import Button from '../Button/button'
import { generateUserData } from '../../utils/helpers'
import { loggedUser } from '../../redux/authReducer'
import httpService from '../../services/http.service'
import 'react-toastify/dist/ReactToastify.css'

const AuthReg = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { loginOrReg } = useParams()
  const [auth, setAuth] = useState({
    login: '',
    password: '',
    name: '',
    avatar: 'https://avatars.dicebear.com/api/bottts/khkl9.svg',
  })

  const userEndPoint = '/user/'

  const labelLogin = 'Login (email)'
  const labelPass = 'Password'
  const descriptLogin = 'Insert your login.'
  const descriptPass = 'Your password must be 8-20 characters long.'
  const buttonLogin = 'Login'

  const clearAuth = () => {
    setAuth({
      login: '',
      password: '',
      name: '',
      avatar: 'https://avatars.dicebear.com/api/bottts/khkl9.svg',
    })
  }

  const changeAuthInput = ({ target }) => {
    setAuth((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleImage = () => {
    const avatarSrc = generateUserData().image
    setAuth((prev) => ({ ...prev, avatar: avatarSrc }))
  }

  const handleSignUp = () => {
    handleImage()
    axios.post('http://localhost:8080/api/auth/signUp', auth)
      .then((res) => res.data)
      .then((data) => {
        dispatch(loggedUser(data))
        httpService.get(`${userEndPoint}/${data.userId}`)
          .then((res) => res.data)
          .then((user) => {
            dispatch(loggedUser({ ...data, ...user }))
          })
        setTimeout(() => {
          history.push('/')
          clearAuth()
        }, 4700)
      })
    toast('You are registred!')
  }

  const handleLogIn = () => {
    axios.post('http://localhost:8080/api/auth/logIn', auth)
      .then((res) => res.data)
      .then((data) => {
        dispatch(loggedUser(data))
        httpService.get(`${userEndPoint}/${data.userId}`)
          .then((res) => res.data)
          .then((user) => {
            dispatch(loggedUser({ ...data, ...user }))
          })
        setTimeout(() => {
          history.push('/')
        }, 4700)
      })
    toast('You are logged in!')
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
              type="text"
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
              type="password"
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
                    type="text"
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
                    <div className="d-flex justify-content-center">
                      <img
                        className="img-thumbnail"
                        src={auth.avatar}
                        alt="ava"
                        onClick={handleImage}
                        style={{ width: '150px' }}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="text-muted">Tap to choise avatar</p>
                    </div>
                  </div>
                </>
              )}
            <div className="d-flex justify-content-center mt-1">
              <>
                {loginOrReg === 'login'
                && (
                <Button
                  buttonName={buttonLogin}
                  auth={auth}
                  buttonClass={loginOrReg === 'login'
                    ? 'btn btn-primary btn-sm'
                    : 'btn btn-secondary btn-sm'}
                  buttonAction={handleLogIn}
                />
                )}
              </>
            </div>
            <div className="d-flex justify-content-center mt-1">
              <Link to="/auth/signin">
                <Button
                  buttonName="Registration"
                  auth={auth}
                  buttonClass={loginOrReg === 'login'
                    ? 'btn btn-secondary btn-sm'
                    : 'btn btn-primary btn-sm'}
                  buttonAction={loginOrReg === 'login'
                    ? null
                    : handleSignUp}
                />
              </Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default AuthReg
