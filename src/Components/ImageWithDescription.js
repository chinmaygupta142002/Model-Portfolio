import React from 'react';
import '../App.css';


function ImageWithDescription() {
  return (
    <div>
      <div className="hero mt-20 h-[120vh]" style={{backgroundImage: 'url(/images/homeImage.jpg)'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen">
            <p className="mb-5 font-bold text-4xl text-white">I STRIVE TO BRING MY VERSATILE AUTHENTICITY AND LOVE OF EXPRESSION THROUGH MOVEMENT INTO EVERYTHING I DO AND CREATE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageWithDescription;



