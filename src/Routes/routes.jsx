import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../components/login/login"
import { useGlobalContext } from "../context/globalContext"
import Dashboard from "../components/Dashboard/Dashboard"
import Incomes from "../components/Incomes/Incomes"
import Expenses from "../components/Expenses/Expenses"


const Auth = () => {
    console.log("Auth");
    <Routes>
        <Route path='login' element={<Login />} />
    </Routes>
}

const MainRoutes = () => {
    console.log("Main");
    <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='incomes' element={<Incomes />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='/' element={<Dashboard />} />
    </Routes>
}

const ProtectedRoute = ({ children }) => {
    const { token } = useGlobalContext()
    if (!token) {
        return <Navigate to='/login' />
    }
    return children
}


const AppRoutes = () => {
    const { token } = useGlobalContext()

    if (!token) {
        { return <Login /> }
    }

    return (
        <Dashboard />
    )
}

export default AppRoutes


