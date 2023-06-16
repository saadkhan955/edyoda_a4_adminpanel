import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard.jsx'
import LoginPage from './pages/LoginPage'
import AddNewProductPage from './pages/AddNewProductPage'
import AccountsPage from './pages/AccountsPage'
import Navbar from './components/Navbar'
import ProductManagerPage from './pages/ProductManagerPage.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<DashboardPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/products' element={<ProductManagerPage/>} />
      <Route path='/add_new_product' element={<AddNewProductPage/>} />
      <Route path='/accounts' element={<AccountsPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App