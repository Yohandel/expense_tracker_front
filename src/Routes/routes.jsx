import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../components/login/login"
import { useGlobalContext } from "../context/globalContext"
import Home from "../components/Home/Home"
import Register from "../components/Auth/register/register"
import { useMemo } from "preact/hooks"
import { Orb } from "../components/Orb/Orb"
import styled from "styled-components"
import bg from '../Images/bg.png';
import { MainLayout } from "../styles/Layout"
import Navigations from "../components/Navigation/Navigations"
import Incomes from "../components/Incomes/Incomes"
import Expenses from "../components/Expenses/Expenses"
import Dashboard from "../components/Dashboard/Dashboard"
import UsersList from "../components/Users/UsersList"


const Auth = () => {
    return (
        <>
          
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Routes>
        </>
    )
}

const MainRoutes = () => {
    const orbMemo = useMemo(() => {
        return <Orb />
    }, [])

    return (
        <AppStyled bg={bg} >
            {orbMemo}
            <MainLayout>
                <Navigations />
                <main>
                    <Routes>
                        <Route path='incomes' element={<Incomes />} />
                        <Route path='expenses' element={<Expenses />} />
                        <Route exact path='/' element={<Dashboard />} />
                        <Route path='/*' element={<Dashboard />} />
                        <Route path='users' element={<UsersList />} />
                    </Routes>
                </main>
            </MainLayout>
        </AppStyled>
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

const AppStyled = styled.div`
height: 100vh;
position: relative;
margin: auto;

main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px  #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;

export default AppRoutes


