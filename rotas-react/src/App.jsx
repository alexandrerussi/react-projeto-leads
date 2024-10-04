import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contacts' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
