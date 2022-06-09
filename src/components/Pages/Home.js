import React from 'react';
import './style.css'
import hamed from '../../assests/images/hamed-hasan.png'
import TypeWriter from '../TypeWriter/TypeWriter';
import { FiDownload } from 'react-icons/fi';
const Home = () => {
    return (
        <div class="hero min-h-screen bg-accent">
            <div className="color bg-primary hidden lg:block"></div>
          
            <div class="hero-content flex-col lg:flex-row">
          <img  src={hamed} class="rounded-full border-slate-900 border-8 lg:border-0 lg:rounded-3xl shadow-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
    data-aos-easing="ease-in-out"
          />
          <div className='px-20'>
            <div className='flex items-center'>
              <span className="text-8xl text-amber-500">-</span>
              <TypeWriter text='text-primary' />
            </div>
          
            <p class="py-6 text-neutral text-left text-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
    data-aos-easing="ease-in-out"
            >I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
           <a className='button border-2 border-primary hover:before:bg-primary hover:text-pureWhite mb-28 lg:md-0' href="https://drive.google.com/file/d/1KLz2Fpilwr-sFH-cIaWOIpH9hgErHFGl/view?usp=sharing" download=''
           
           data-aos="zoom-in"
           data-aos-duration="1000"
    
           >
             <span className='text-neutral'>Download Resume</span>
             <span className='button-icon bg-primary'>

            <FiDownload/>
             </span>
           </a>


         
          </div>
    
            </div>
      </div>
    );
};

export default Home;