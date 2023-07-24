import React from 'react'
import { useGlobalContext } from "../context/globalContext";
import { expenses, home, trend, user, users } from "./Icons";
import { NavLink } from 'react-router-dom';




const MenuItems = () => {

    const { userInfo } = useGlobalContext()
    const type = userInfo?.type

    const menuItems = [
        {
            id: 1,
            title: 'Home',
            icon: home,
            link: '/'
        },
        {
            id: 2,
            title: 'Incomes',
            icon: trend,
            link: '/incomes'
        },
        {
            id: 3,
            title: 'Expenses',
            icon: expenses,
            link: '/expenses'
        },
        type === "admin" ? {
            id: 4,
            title: 'Users',
            icon: users,
            link: '/users'
        } : null,

    ]



    return menuItems.map((item) => {
        if (!item) return
        return (
            <NavLink to={item.link}>
                <li key={item.id}
                >
                    {item.icon}
                    <span>{item.title}</span>
                </li>
            </NavLink>
        )
    })
}

export default MenuItems