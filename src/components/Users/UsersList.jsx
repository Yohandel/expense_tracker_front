import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { useEffect, useState } from 'preact/hooks'
import UserItem from './UserItem'
import './users.css'
import { InnerLayout } from '../../styles/Layout'
import { addUser } from '../../utils/Icons'
import AddUserModal from './addUserModal'

const UsersList = () => {

    const { getUsers, users } = useGlobalContext()

    useEffect(() => {
        getUsers()
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="u-content">
            <InnerLayout>
                <h1>Users</h1>
                <div className="total-users">
                    <h2> Total Users: <span> {users.length}</span></h2>
                    <h2 className='add-btn' onClick={handleShow}>{addUser}</h2>
                </div>
                <div className="users">
                    {users.map(user => {
                        const { _id, name, lastName, email, type, birthday, status } = user
                        return (
                            <UserItem
                                key={_id}
                                id={_id}
                                name={name}
                                lastName={lastName}
                                email={email}
                                type={type}
                                birthday={birthday}
                                status={status}
                            />
                        )
                    })}
                </div>

                <AddUserModal
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                    title='Add user'
                />

            </InnerLayout>
        </div>

    )
}

export default UsersList