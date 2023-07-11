import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../components/login/login"
import { useGlobalContext } from "../context/globalContext"
import Home from "../components/Home/Home"


const Auth = () => {
    return (
        <>
            <Navigate to='/login' />
            <Routes>
                <Route path='login' element={<Login />} />
            </Routes>
        </>
    )
}

const MainRoutes = () => {
    return (
        <>
            <Navigate to='/' />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}


const AppRoutes = () => {
    const { token } = useGlobalContext()

    if (!token) {
        { return <Auth /> }
    }

    return (
        <MainRoutes />
    )
}

export default AppRoutes


