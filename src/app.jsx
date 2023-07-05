import { useMemo } from 'preact/hooks'
import styled from 'styled-components';
import bg from './Images/bg.png';
import { MainLayout } from './styles/Layout.jsx';
import { Orb } from './components/Orb/Orb.jsx';
import Navigations from './components/Navigation/Navigations.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Incomes from './components/Incomes/Incomes.jsx';
import Expenses from './components/Expenses/Expenses.jsx';

import { Navigate, Route, Routes } from "react-router-dom";
import Login from './components/login/login.jsx';
import { useGlobalContext } from './context/globalContext';


export function App() {


  const ProtectedRoute = ({ children }) => {
    const { token } = useGlobalContext()
    if (!token) {
      return <Navigate to='/login' />
    }
    return children
  }


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
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path='incomes' element={<ProtectedRoute><Incomes /></ProtectedRoute>} />
            <Route path='expenses' element={<ProtectedRoute><Expenses /></ProtectedRoute>} />
            <Route path='/' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          </Routes>
        </main>
      </MainLayout>
    </AppStyled>
  )

}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;

main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;

