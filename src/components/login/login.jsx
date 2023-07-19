import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { Link, Navigate } from 'react-router-dom'
import './login.css'
import { useState } from 'preact/hooks'

const params = {
  email: '',
  password: ''
}

const Login = () => {

  const { logIn } = useGlobalContext()
  const [inputState, setInputState] = useState(params)

  const { email, password } = inputState

  const handleLogin = () => {
    logIn({ email: email, password: password })
  }

  const handleInput = name => e => {
    setInputState({ ...inputState, [name]: e.target.value })
  }


  return (
    <div className="container">
      <div className="col-md-6 col-xl-4 d-flex align-items-center bg-body-extra-light form-container">
        <div className="content">
          <div className="text-center d-flex justify-content-center mt-3 mb-3">
            <h3>Sign In</h3>
          </div>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" value={email}
                name={'email'}
                placeholder='ex: xxxx@xxx.xxx'
                onChange={handleInput('email')} />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" autoComplete='false' className="form-control" id="exampleInputPassword1" value={password}
                name={'password'}
                onChange={handleInput('password')} />
            </div>
            <div className="mb-4">
              <Link  to='/' className="btn btn-lg btn-outline-success fw-semibold w-100" onClick={() => handleLogin()}>
                Login
              </Link>
              <div className="mt-4">
                <div className="w-100 text-center ">
                  <Link to='/register' className="fs-sm fw-medium link-fx text-muted me-2 mb-1 d-inline-block">
                    Register
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-100 text-center ">
                  <a className="fs-sm fw-medium link-fx text-muted me-2 mb-1 d-inline-block">
                    Forgot My Password
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login