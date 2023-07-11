import React from 'react'
import { MainLayout } from '../../styles/Layout'
import Form from '../Forms/Form'
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
    <div className='container'>
      <div className="form-container">
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
          <Link type='button' className='btn btn-success' to='/' onClick={() => handleLogin()}>LOGIN</Link>
        </form>
      </div>
    </div>
  )
}

export default Login