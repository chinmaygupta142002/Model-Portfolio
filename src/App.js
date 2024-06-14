import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Portfolio/> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact/> />
        <Route path="/home" element=<Home/> />
      </Routes>
    </BrowserRouter>
  )
}

export default App