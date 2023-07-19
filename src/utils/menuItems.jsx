import { dashboard, expenses, home, transactions, trend, users } from "./Icons";

export const menuItems = [
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
    {
        id: 4,
        title: 'Users',
        icon: users,
        link: '/users'
    },
   
]