import { dashboard, expenses, home, transactions, trend } from "./Icons";

export const menuItems = [
    {
        id: 1,
        title: 'Home',
        icon: home,
        linkf: '/dashboard'
    },
    {
        id: 2,
        title: 'Dashboard',
        icon: dashboard,
        linkf: '/dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        linkf: '/incomes'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        linkf: '/expenses'
    },
   
]