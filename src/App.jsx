import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './routes/router' // Jika config router-nya ada di src/router.jsx

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App