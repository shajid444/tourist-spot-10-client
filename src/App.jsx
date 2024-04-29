
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
// import { ToastContainer } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
