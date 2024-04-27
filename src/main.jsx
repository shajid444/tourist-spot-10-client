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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,

    _children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/place')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/Tourist",
        element: <TouristsSpotInput />
      },
     
      {
        path: "viewDetails",
        element: <ViewDetails></ViewDetails>
      },
      {
        path: "/update",
        element: <Update></Update>
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
        loader: ()=> fetch('http://localhost:5000/place')
      },
      {
        path: "/updatepage",
        element: <UpdatePage></UpdatePage>
     
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
    <RouterProvider router={router} />
    </HelmetProvider>
 
  </React.StrictMode>,
)
