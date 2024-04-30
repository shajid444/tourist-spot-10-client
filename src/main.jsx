import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import { HelmetProvider } from 'react-helmet-async';
import TouristsSpotInput from './component/TouristsSpot/TouristsSpotInput.jsx';
import ViewDetails from './component/View Details/ViewDetails.jsx';
import Update from './component/Update/Update.jsx';
import Error from './component/Error/Error.jsx';
import TouristsSpot from './component/TouristsSpot/TouristsSpot.jsx';
import MyList from './component/MyList/MyList.jsx';
import UpdatePage from './component/UpdatePage/UpdatePage.jsx';
import Register from './component/Register/Register.jsx';
import FirebaseProvider from './component/FirebaseProvider/FirebaseProvider.jsx';
import PrivateRoute from './component/PrivateRoute/PrivateRoute.jsx';
import AllTouristsSpot from './component/AllTouristSpot/AllTouristsSpot.jsx';
import Users from './component/Users/Users.jsx';
import CountryInput from './component/Country/CountryInput.jsx';
import Country from './component/Country/Country.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,

    _children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-livid.vercel.app/place')
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('https://assignment-10-server-livid.vercel.app/user')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/Tourist",
        element: <PrivateRoute>
          <TouristsSpotInput />
        </PrivateRoute>
      },
      {
        path: "/cinput",
        element: <CountryInput></CountryInput>
        
      },
     
      {
        path: "/allTouristSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: ()=> fetch('https://assignment-10-server-livid.vercel.app/place')
      },

      {
        path: "/viewDetails/:id",
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader : ({params})=> fetch(`https://assignment-10-server-livid.vercel.app/place/${params.id}`)
      },
      
      {
        path: "/update",
        element: <Update></Update>
      },
      {
        path: "/myList",
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>,
        loader: () => fetch('https://assignment-10-server-livid.vercel.app/place')
      },
      {
        path: '/updatepage/:id',
        element: <UpdatePage></UpdatePage>,
        loader : ({params})=> fetch(`https://assignment-10-server-livid.vercel.app/place/${params.id}`)

        // loader: () => fetch('https://assignment-10-server-livid.vercel.app/place')
      },
    ],
    get children() {
      return this._children;
    },
    set children(value) {
      this._children = value;
    },
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
     <FirebaseProvider>
     <RouterProvider router={router} />
     </FirebaseProvider>

    </HelmetProvider>

  </React.StrictMode>,
)
