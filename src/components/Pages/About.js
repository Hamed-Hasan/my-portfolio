import React from 'react';

const About = () => {
    return (
        <div className="bg-[#000000e8] py-10 ">
            <div className="title-section">
                <h1>About <span className='text-amber-500'>Me</span></h1>
                <span className='title-bg'>My Skill</span>
            </div>

            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
      <h2 className='text-4xl text-white text-left font-bold'>PERSONAL INFOS
</h2>
    <div class="md:flex flex-wrap py-5 text-center">
      <div className='md:w-1/2'>
      <div class="flex flex-wrap text-center">
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>First Name: </span> <span className='text-white'>Hamed</span></div>
      </div>
      <div className='w-1/2'>
      <div className='text-md text-left text-slate-400'><span>Last Name: </span> <span className='text-white'>Hasan</span></div>
      </div>
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>Age: 24 Years</span> <span className='text-white'>Hamed</span></div>
      </div>
      <div className='w-1/2'>
      <div className='text-md text-left text-slate-400'><span>Nationality: </span> <span className='text-white'>Bangladesh</span></div>
      </div>
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>Address: </span> <span className='text-white'>Chittagong</span></div>
      </div>
      <div className='w-1/2'>
      <div className='text-md text-left text-slate-400'><span>Freelance: </span> <span className='text-white'>Available</span></div>
      </div>
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>Phone: </span> <span className='text-white'>+966 595035008</span></div>
      </div>
      <div className='w-1/2'>
      <div className='text-md text-left text-slate-400'><span>Email: </span> <span className='text-white'>hamedhasan422421@gmail.com</span></div>
      </div>
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>Present Address: </span> <span className='text-white'>Saudi Arabia, Mecca</span></div>
      </div>
      <div className='w-1/2'>
      <div className='text-sm text-left text-slate-400'><span>Languages: </span> <span className='text-white'>English,Arabic,Bengali,Hindi,Urdu</span></div>
      </div>
    </div>
      </div>
      <div className='md:w-1/2'>
      <div class="flex flex-wrap text-center">
      <div className='w-1/2'>1</div>
      <div className='w-1/2'>2</div>
    </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default About;