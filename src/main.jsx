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
import AuthProvider from './provider/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './ErrorPage/ErrorPage';
import MyList from './components/MyList/MyList';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addTourists',
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
      },
      {
        path: '/allTourists',
        element: <AllTouristsSpots></AllTouristsSpots>,
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
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
    <div className=''>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
