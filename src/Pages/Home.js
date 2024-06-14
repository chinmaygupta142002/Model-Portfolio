import React from 'react'
import Navbar from '../Components/Navbar'
import ImageWithDescription from '../Components/ImageWithDescription'
import Footer from '../Components/Footer'
import '../App.css';

function Home() {
  return (
    <div>
    <Navbar classname="fixed top-0"/>
    <ImageWithDescription />
    <Footer />
    </div>

  )
}

export default Home