import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  Checkout,
  Error,
  Home,
  SingleProduct,
  About,
  Cart,
  Products,
  HomeLayout,
  PrivateRoute,
} from './pages'

import { loader as homePageLoader } from './pages/HomePage'
import { loader as singleProductPageLoader } from './pages/SingleProductPage'
import { loader as productsPageLoader } from './pages/ProductsPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homePageLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsPageLoader,
      },
      {
        path: '/products/:id',
        loader: singleProductPageLoader,
        element: <SingleProduct />,
      },
      {
        path: 'checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
