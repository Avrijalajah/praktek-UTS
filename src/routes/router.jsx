import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import DetailHome from '../pages/DetailHome'
import Testimony from '../pages/Testimony'
import FAQ from '../pages/FAQ'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: 'about', 
        element: <About /> 
      },
      { 
        path: 'detail/:id', 
        element: <DetailHome /> 
      },
      { 
        path: 'testimony', 
        element: <Testimony /> 
      },
      { 
        path: 'faq', 
        element: <FAQ /> 
      },
    ],
  },
])
