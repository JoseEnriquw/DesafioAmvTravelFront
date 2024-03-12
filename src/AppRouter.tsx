import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Tour from './pages/tour/TourPage'
import Booking from './pages/booking/Booking'
import Navbar from './components/navbar/Navbar'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Tour" Component={Tour} />
        <Route path="/Booking" Component={Booking} />
      </Routes>
    </Router>
  )
}

export default AppRouter
