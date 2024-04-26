
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <h1>Vite + React</h1> */}
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
      
      
    </>
  )
}

export default App
