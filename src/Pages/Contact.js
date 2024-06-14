import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../App.css';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0 w-full max-w-6xl">
          <div className="flex-grow">
            <div className="card w-full lg:w-96 shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input type="text" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input type="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered" required />
                </div>
                <button className="btn btn-outline btn-success w-full mt-10">Send</button>
              </form>
            </div>
          </div>
          <div className="lg:divider lg:divider-horizontal"></div>
          <div className="flex-grow text-center lg:text-left">
            <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
              <h1 className="text-4xl lg:text-5xl font-bold">Contact Me</h1>
              <h1 className="text-xl lg:text-2xl mt-4 lg:mt-10">Anna McClean</h1>
              <h1 className="text-xl lg:text-2xl mt-4 lg:mt-10">anna.e.mcclean@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;





