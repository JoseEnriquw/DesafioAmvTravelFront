import React from 'react'
import logo from '../../assets/images/amvtravel_logo.jpg'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="full-screen-container">
      <img src={logo} className="full-screen-image"/>
    </div>
  )
}

export default Home
