import React from 'react'
import Event from './layout/Event';
import NotFound from './layout/NotFound';
import Routes from './Routes/Routes';
import About from './layout/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

    const router = createBrowserRouter([
        {
        path: "/",
        element: <Routes />,
        errorElement: <NotFound />, // way for showing error when user write a path outside of the project rand of paths , example: localhost.../register
        children:[
          {
            path: "/",
            element:<Event/> ,
          },
          {
            path: "/About",
            element: <About /> ,
          },
         {
            path: "*",              //another way for the error 
            element: <NotFound />
          }
        ]
      },
      ]);



  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App