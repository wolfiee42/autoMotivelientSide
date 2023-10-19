import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-xl text-center'>Wolfie AutoMotive</h1>
      <Outlet></Outlet>
    </>
  )
}

export default App
