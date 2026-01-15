import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import StartPage from './assets/StartPage'
import MainPage from './assets/MainPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage/>
  },
  {
    path: "/letter",
    element: < MainPage />
  }
])

function App() {
  return (
    < RouterProvider router={router} />
  )
}

export default App