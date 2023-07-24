import React from 'react'
import { Modal } from 'react-bootstrap'
import { useGlobalContext } from '../../context/globalContext'
import { useState } from 'preact/hooks'

const params = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    type: '',
}

const AddUserModal = ({ show, handleClose, title }) => {

    const { signUp } = useGlobalContext()
    const [inputState, setInputState] = useState(params)

    const { name, lastName, email, password, birthday, type } = inputState

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
            type: '',
        })
    }
    return (
        <Modal centered={true} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    <div class="mb-3 col-md-6">
                        <label for="exampleInputEmail1" className="form-label">Type</label>
                        <select className="form-select" aria-label="Default select example" placeholder='Select type' value={type}
                            name={'type'}
                            onChange={handleInput('type')}>
                            <option value='' disabled selected>Select type</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
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

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-outline-danger" onClick={handleClose}>
                    Close
                </button>
                <button className="btn btn-outline-success" onClick={handleRegister}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>

    )
}

export default AddUserModal