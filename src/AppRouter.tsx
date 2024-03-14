import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Tour from './pages/tour/TourPage'
import Booking from './pages/booking/BookingPage'
import LoginPage from './pages/login/LoginPage'
import Navbar from './components/navbar/Navbar'
import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import { AuthRoute } from './components/AuthRoute'

initializeApp(config.firebaseConfig)

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Login" Component={LoginPage} />
        <Route path="/" element={
                    <AuthRoute>
                      <Home/>
                    </AuthRoute>
          } />
        <Route path="/Tour" element={
                  <AuthRoute>
                    <Tour/>
                  </AuthRoute>
          } />
        <Route path="/Booking" element={
                  <AuthRoute>
                    <Booking/>
                  </AuthRoute>
          } />
      </Routes>
    </Router>
  )
}

export default AppRouter
