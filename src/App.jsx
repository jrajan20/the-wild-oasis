
import { Navigate, Route, Routes } from 'react-router-dom'
import Button from './ui/Button'
import Input from './ui/Input'
import styled from 'styled-components'
import Row from './ui/Row'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import Users from './pages/Users'
import GlobalStyles from './styles/GlobalStyles'
import Heading from './ui/Heading'



  const StyledApp =styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
`;
  
function App() {
  return (

    <>
      <GlobalStyles />
      <StyledApp>
        <Row type='vertical'>
      <Row type='horizontal'>
        <Heading as='h1'>The Wild Oasis</Heading>
       <div>
          <Button variation='primary' size='medium'><Heading as='h2'>Check In</Heading></Button>
          <Button variation='secondary' size='medium'><Heading as='h2'>Check Out</Heading></Button>
          
        </div> 
    
      </Row>
      <Row type='vertical'>
        <Heading as='h3'>Form:</Heading>
    
          <Input placeholder="Number of guests" />
      </Row>
      </Row>
    </StyledApp>
    </>
   
  )
}

export default App
