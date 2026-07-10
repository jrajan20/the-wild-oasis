
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

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #333;
` 

function App() {
  return (
    <div>
      <H1>Welcome to the Wild Oasis</H1>
    </div>
    //   <Routes>
    //   <Route path="/" element={<Navigate replace to="/dashboard" />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    //   <Route path="/bookings" element={<Bookings />} />
    //   <Route path="/cabins" element={<Cabins />} />
    //   <Route path="/users" element={<Users />} />
    //   <Route path="/settings" element={<Settings />} />
    //   <Route path="/account" element={<Account />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="*" element={<PageNotFound />} />
    // </Routes>
  )
}

export default App
