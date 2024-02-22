import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Products from './components/Products.jsx'
import ShowCart from './components/ShowCart.jsx'
import ShowLikedProducts from './components/ShowLikedProducts.jsx'





const routerProp = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Products />} />
      <Route path='cart' element={<ShowCart />} />
      <Route path='liked' element={<ShowLikedProducts/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={routerProp} />
    </Provider>

  </React.StrictMode>,
)
