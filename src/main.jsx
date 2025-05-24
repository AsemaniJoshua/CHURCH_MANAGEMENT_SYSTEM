import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './App.jsx'
import Login from './Login.jsx'
import Signup from './SignUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/about" element={<App />} />
      <Route path="/sermons" element={<App />} />
      <Route path="/contact" element={<App />} /> */}

    </Routes>

  </BrowserRouter>,
)
