import { dashboard, expenses, home, transactions, trend, users } from "./Icons";

const  userInfo  = JSON.parse(sessionStorage.getItem('userInfo')) 
const {type} = userInfo

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
    type  === "admin" ?{
        id: 4,
        title: 'Users',
        icon: users,
        link: '/users'
    } : null,
   
]