
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AnimatedCursor from "react-animated-cursor"

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      
      {/* <AnimatedCursor  /> */}
<Header>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="portfolio" element={<Portfolio/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
    <ScrollToTop/>
    </Header>
    </div>
  );
}

export default App;
