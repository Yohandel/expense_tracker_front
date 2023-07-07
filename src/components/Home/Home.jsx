import { useMemo } from 'preact/hooks'
import React from 'react'
import { useGlobalContext } from '../../context/globalContext'
import styled from 'styled-components';
import { Orb } from '../Orb/Orb';
import { MainLayout } from '../../styles/Layout';
import bg from '../../Images/bg.png';
import Navigations from '../Navigation/Navigations.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Incomes from '../Incomes/Incomes.jsx';
import Expenses from '../Expenses/Expenses.jsx';
import Login from '../login/login.jsx';

const Home = () => {


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
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='incomes' element={<Incomes />} />
                        <Route path='expenses' element={<Expenses />} />
                        <Route path='/' element={<Dashboard />} />
                    </Routes>
                </main>
            </MainLayout>
        </AppStyled>
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


export default Home