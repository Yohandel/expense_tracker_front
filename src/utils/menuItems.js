import { dashboard, expenses, transactions, trend } from "./Icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        linkf: '/dashboard'
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: transactions,
        linkf: '/dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        linkf: '/dashboard'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        linkf: '/dashboard'
    },
]