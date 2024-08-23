import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import AddTouristsSpot from './components/AddTouristsSpot/AddTouristsSpot';
import AllTouristsSpots from './components/AllTouristsSpots/AllTouristsSpots';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addTourists',
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: '/allTourists',
        element: <AllTouristsSpots></AllTouristsSpots>,
        loader: () => fetch('http://localhost:5000/spots')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto px-2'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
