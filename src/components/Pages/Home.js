import React from 'react';
import './style.css'
import hamed from '../../assests/images/hamed-hasan.png'
import TypeWriter from '../TypeWriter/TypeWriter';
import { FiDownload } from 'react-icons/fi';
const Home = () => {
    return (
        <div class="hero min-h-screen bg-[#000000e8]">
            <div className="color hidden lg:block"></div>
          
            <div class="hero-content flex-col lg:flex-row">
          <img  src={hamed} class=" rounded-3xl shadow-2xl" />
          <div className='px-20'>
            <div className='flex items-center'>
              <span className="text-8xl text-amber-500">-</span>
              <TypeWriter/>
            </div>
          
            <p class="py-6 text-white text-left text-xl">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
           <a className='button' href="https://drive.google.com/file/d/1KLz2Fpilwr-sFH-cIaWOIpH9hgErHFGl/view?usp=sharing" target='_blank' download='Resume'>
             <span>Download Resume</span>
             <span className='button-icon'>

            <FiDownload/>
             </span>
           </a>

          </div>
    
            </div>
      </div>
    );
};

export default Home;