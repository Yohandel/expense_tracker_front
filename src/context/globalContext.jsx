import { createContext } from "preact";
import { useContext, useState } from 'preact/hooks'
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1';

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [token, setToken] = useState(sessionStorage.getItem('token'))
    const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem('userInfo')))
    const [users, setUsers] = useState([])

    const uninterceptedAxiosInstance = axios.create();
    axios.interceptors.request.use(
        async (config) => {;
            const token = sessionStorage.getItem('token')
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}/add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        setIncomes([response.data.income, ...incomes])
    }
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}/get-incomes`)
            .catch((err) => {
                setError(err.response.data.message)
            })
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-income/${id}`)
            .catch((err) => {
                setError(err.response.data.message)
            })

        setIncomes(incomes.filter((income) => income._id !== id))
    }

    const totalIncome = () => {
        let totaL = 0;
        incomes.forEach(income => {
            totaL += income.amount
        });

        return totaL
    }

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}/add-expense`, expense)
            .catch((err) => {
                setError(err.response.data.message)
            })
        setExpenses([response.data.expense, ...expenses])
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}/get-expenses`)
            .catch((err) => {
                setError(err.response.data.message)
            })
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`)
            .catch((err) => {
                setError(err.response.data.message)
            })

        setExpenses(expenses.filter((expense) => expense._id !== id))
    }

    const totalExpense = () => {
        let totaL = 0;
        expenses.forEach(expense => {
            totaL += expense.amount
        });

        return totaL
    }

    const totalBalance = () => {
        let total = 0;
        total = totalIncome() - totalExpense()

        return total
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    const getUsers = async () => {
        const response = await axios.get(`${BASE_URL}/get-users`)
            .catch((err) => {
                setError(err.response.data.message)
            })
        setUsers(response.data)
    }

    const logIn = async (credentials) => {
        const res = await uninterceptedAxiosInstance.post(`${BASE_URL}/login`, credentials).then((result) => {
            sessionStorage.setItem('token', result.data.token)
            sessionStorage.setItem('userInfo',JSON.stringify(result.data.userInfo))
            setToken(sessionStorage.getItem('token'))
            setUserInfo(JSON.parse(sessionStorage.getItem('userInfo')))
        }).catch((err) => {
            console.log(err);
        });
    }
    const signUp = async (credentials) => {
        const res = await uninterceptedAxiosInstance.post(`${BASE_URL}/add-user`, credentials).then((result) => {
            setUsers([result.data.user, ...users])
        }).catch((err) => {
            console.log(err);
        });
    }

    const logOut = async () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userInfo')
        setToken(null)
        setUserInfo(null)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            deleteIncome,
            totalIncome,
            getExpenses,
            getUsers,
            addExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            logIn,
            logOut,
            signUp,
            incomes,
            expenses,
            users,
            token,
            userInfo

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}