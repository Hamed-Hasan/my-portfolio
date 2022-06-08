import React from 'react';
import './style.css'
import hamed from '../../assests/images/hamed-hasan.png'
import TypeWriter from '../TypeWriter/TypeWriter';
const Home = () => {
    return (
        <div class="hero min-h-screen bg-black">
            <div className="color hidden lg:block"></div>
          
            <div class="hero-content flex-col lg:flex-row">
          <img  src={hamed} class="w-1/3 rounded-3xl shadow-2xl" />
          <div className='px-20'>
            <div className='flex items-center'>
              <span className="text-8xl text-amber-500">-</span>
              <TypeWriter/>
            </div>
          
            <p class="py-6 text-white text-left text-xl">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
           
          </div>
    
            </div>
      </div>
    );
};

export default Home;