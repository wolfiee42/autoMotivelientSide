import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './Components/theme/theme.css'
import { useState } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} ></Navbar>
      <Outlet isDarkMode={isDarkMode}></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
