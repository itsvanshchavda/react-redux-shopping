import React from 'react'
import Header from './components/Header'

import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return   <>
  <ToastContainer autoClose={1000} />
    <Header />
    <Outlet />
    
  </>
}

export default App