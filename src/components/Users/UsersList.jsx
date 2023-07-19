import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { useEffect } from 'preact/hooks'
import UserItem from './UserItem'
import './users.css'
import { InnerLayout } from '../../styles/Layout'

const UsersList = () => {

    const { getUsers, users } = useGlobalContext()

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className="u-content">
            <InnerLayout>
                <h1>Users</h1>
                <h2 className="total-users">Total Users: <span> {users.length}</span> </h2>
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

            </InnerLayout>
        </div>

    )
}

export default UsersList