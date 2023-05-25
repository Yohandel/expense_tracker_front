import { createContext } from "preact";
import { useContext, useState } from 'preact/hooks'
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1';

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

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

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}