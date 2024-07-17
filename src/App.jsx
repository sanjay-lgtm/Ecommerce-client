import React from 'react'
import Navbar from './Components/Header/Navbar'
import { useTheme } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import About from './Pages/About/About';
import SignUp from './Pages/AuthPages/SignUp';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App
