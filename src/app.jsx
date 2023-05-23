import { useMemo, useState } from 'preact/hooks'
import GlobalStyle from './styles/GlobalStyles.js';
import styled from 'styled-components';
import bg from './Images/bg.png';
import { MainLayout } from './styles/Layout.js';
import { Orb } from './components/Orb/Orb.js';
import Navigations from './components/Navigation/Navigations.js';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Incomes from './components/Incomes/Incomes.jsx';
import Expenses from './components/Expenses/Expenses.jsx';


export function App() {
  const [active, setactive] = useState(1)

  const orbMemo = useMemo(() => {
    return <Orb/>
  }, [])

  const displayData = () =>{
    switch (active) {
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
    
      default:
        return <Dashboard/>
    }
  }

  return (
    <AppStyled bg={bg} >
      {orbMemo}
     <MainLayout>
      <Navigations active={active} setActive ={setactive}/>
      <main>
        {displayData()}
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

