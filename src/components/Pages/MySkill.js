
import React from 'react';
import ProgressBar from 'react-animated-progress-bar';

const MySkill = () => {
   
    return (
       <div className="container mx-auto hidden lg:block">
            <div className='py-20'>
            <h1 className='my-6 text-white text-4xl font-bold'
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos="fade-left">My Skill</h1>

<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="90" />
    <h3 className='text-white'>HTML</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="90" />
    <h3 className='text-white'>CSS</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="60" />
    <h3 className='text-white'>JAVASCRIPT</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="50" />
    <h3 className='text-white'>JQUERY</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="80" />
    <h3 className='text-white'>BOOTSTRAP</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="75" />
    <h3 className='text-white'>TAILWIND</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="40" />
    <h3 className='text-white'>MONGODB</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="40" />
    <h3 className='text-white'>EXPRESS JS</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="70" />
    <h3 className='text-white'>REACT JS</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="40" />
    <h3 className='text-white'>NODE JS</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="70" />
    <h3 className='text-white'>WORDPRESS</h3>
    </div>
    <div className='max'
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos="zoom-in">
    <ProgressBar width="330" trackWidth="13" percentage="50" />
    <h3 className='text-white'>GRAPHICS</h3>
    </div>
</div>


        </div>
       </div>
    );
};

export default MySkill;