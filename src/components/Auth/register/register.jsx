import { useState } from 'preact/hooks'
import React from 'react'
import { useGlobalContext } from '../../../context/globalContext'
import { Link } from 'react-router-dom'
import './register.css'


const params = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
}

const Register = () => {

    const { signUp } = useGlobalContext()
    const [inputState, setInputState] = useState(params)

    const { name, lastName, email, password, birthday } = inputState

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }

    const handleRegister = () => {
        signUp(inputState)
        setInputState({
            name: '',
            lastName: '',
            email: '',
            password: '',
            birthday: '',
        })
    }

    return (
        <div className="r-container">
            <div className="d-flex align-items-center bg-body-extra-light r-form-container">
                <div className="content">
                    <div className="text-center d-flex justify-content-center mt-3 mb-3">
                        <h3>Sign Up</h3>
                    </div>
                    <form className='row pl-6'>
                        <div class="mb-3 col-md-6">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" value={name}
                                name={'name'}
                                onChange={handleInput('name')} />
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="exampleInputEmail1" className="form-label">Last Name</label>
                            <input type="text" className="form-control" value={lastName}
                                name={'lastName'}
                                onChange={handleInput('lastName')} />
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="exampleInputEmail1" className="form-label">Birthday</label>
                            <input type="date" className="form-control" value={birthday}
                                name={'birthday'}
                                onChange={handleInput('birthday')} />
                        </div>
                        <div class="mb-3 col-md-6">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email}
                                name={'email'}
                                placeholder='ex: xxxx@xxx.xxx'
                                onChange={handleInput('email')} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" autoComplete='false' className="form-control" id="exampleInputPassword1" value={password}
                                name={'password'}
                                onChange={handleInput('password')} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                            <input type="password" autoComplete='false' className="form-control" id="exampleInputPassword1" value={password}
                            />
                        </div>
                        <div className="mb-4">
                            <a className="btn btn-lg btn-outline-success fw-semibold w-100" onClick={() => handleRegister()}>
                                Register
                            </a>

                            <div className="mt-4">
                                <div className="w-100 text-center ">
                                    <Link to='/login' className="fs-sm fw-medium link-fx text-muted me-2 mb-1 d-inline-block">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register