import React from 'react'
import Navbar from '../Components/Navbar'
import '../App.css'

function About() {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200 ml-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="/images/aboutImage.jpg" 
            className="w-1/2 h-[60vh] rounded-lg shadow-2xl" 
          />
          <div>
            <h1 className="text-5xl font-bold">ABOUT</h1>
            <p className="py-6 text-xl">My name is Anna McClean and I am a 19 year old commercial and fashion model. This past summer I opened the SEED runway show for StyleWeek in Providence, RI. I am passionate about my work and I strive to bring my versatile authenticity and love of expression through movement into everything I do and create. Currently I am working as a free-lance model out of Boston, MA, but am available to travel to other destinations on the East Coast. Click on the Contact page for booking inquiries.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
