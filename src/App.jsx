
import { Navigate, Route, Routes } from 'react-router-dom'

import styled from 'styled-components'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'
import GlobalStyles from './styles/GlobalStyles'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #333;
` 
const Button = styled.button`
  background-color: var(--color-brand-600);
  border: none;
  color: var(--color-brand-50);
  padding: 1.2rem 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`

  const Input = styled.input`
  padding: 1.2rem 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`
  const StyledApp =styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
`;
  
function App() {
  return (

    <>
      <GlobalStyles />
      <StyledApp>
      <H1>Welcome to the Wild Oasis</H1>
      <Button>Check In</Button>
      <Button>Check Out</Button>
      <Input placeholder="Number of guests" />
    </StyledApp>
    </>
   
  )
}

export default App
