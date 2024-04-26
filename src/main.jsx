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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    _children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/Tourist",
        element: <TouristsSpotInput />
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
    <HelmetProvider></HelmetProvider>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
