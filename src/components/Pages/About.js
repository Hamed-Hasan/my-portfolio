import React from 'react';
import CountUp from 'react-countup';
import { MdMiscellaneousServices } from 'react-icons/md';
import Services from './Services';

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
    <div class="md:flex flex-wrap items-center py-5 text-center">
      <div className='md:w-1/2'>
      <div class="flex flex-wrap text-center">
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>First Name: </span> <span className='text-white'>Hamed</span></div>
      </div>
      <div className='w-1/2 my-3'>
      <div className='text-md text-left text-slate-400'><span>Last Name: </span> <span className='text-white'>Hasan</span></div>
      </div>
      <div className='w-1/2 my-3'>
          <div className='text-md text-left text-slate-400'><span>Age: 24 Years</span> <span className='text-white'>Hamed</span></div>
      </div>
      <div className='w-1/2 my-3'>
      <div className='text-md text-left text-slate-400'><span>Nationality: </span> <span className='text-white'>Bangladesh</span></div>
      </div>
      <div className='w-1/2 my-3'>
          <div className='text-md text-left text-slate-400'><span>Address: </span> <span className='text-white'>Chittagong</span></div>
      </div>
      <div className='w-1/2 my-3'>
      <div className='text-md text-left text-slate-400'><span>Freelance: </span> <span className='text-white'>Available</span></div>
      </div>
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>Phone: </span> <span className='text-white'>+966 595035008</span></div>
      </div>
      <div className='w-1/2 my-3'>
      <div className='text-md text-left text-slate-400'><span>Email: </span> <span className='text-white'>hamedhasan422421@gmail.com</span></div>
      </div>
      <div className='w-1/2'>
          <div className='text-md text-left text-slate-400'><span>Present Address: </span> <span className='text-white'>Saudi Arabia, Mecca</span></div>
      </div>
      <div className='w-1/2'>
      <div className='text-sm text-left text-slate-400'><span>Languages: </span> <span className='text-white'>English,Arabic,Bengali,Hindi,Urdu</span></div>
      </div>
    </div>




<label for="my-modal-3" class="button mt-5">
<span>Download Resume</span>
             <span className='button-icon'>

            <MdMiscellaneousServices/>
             </span>
</label>


<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal bg-black">
<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

  <div class="modal-box w-11/12 max-w-7xl bg-slate-700">
   <Services/>
  </div>
</div>



    
      </div>

      <div className='md:w-1/2 mt-9 md:mt-0'>
      <div class="flex flex-wrap text-center">
      <div className='w-1/2'>
          <div className='border p-11 m-4 border-slate-400 rounded-md'>
            <h2 className='text-amber-500 text-6xl font-bold'>
                <CountUp 
                end={2}
                duration={5}
                /> <sup className='text-amber-500 text-4xl -ml-5'>+</sup></h2>
            <div className='mt-3 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>

                <span className='text-sm text-white ml-3'>YEARS OF EXPERIENCE</span>
            </div>
          </div>
      </div>
      <div className='w-1/2'>
          <div className='border p-11 m-4 border-slate-400 rounded-md'>
            <h2 className='text-amber-500 text-6xl font-bold'>
            <CountUp 
                end={52}
                duration={5}
                /><sup className='text-amber-500 text-4xl '>+</sup></h2>
            <div className='mt-3 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
</svg>

                <span className='text-md text-white ml-3'>COMPLETED PROJECT</span>
            </div>
          </div>
      </div>
      <div className='w-1/2'>
          <div className='border p-11 m-4 border-slate-400 rounded-md'>
            <h2 className='text-amber-500 text-6xl font-bold'>
            <CountUp 
                end={49}
                duration={5}
                /> <sup className='text-amber-500 text-4xl -ml-5'>+</sup></h2>
            <div className='mt-3 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
</svg>

                <span className='text-md  text-white ml-3'>HAPPY CUSTOMERS</span>
            </div>
          </div>
      </div>
      <div className='w-1/2'>
          <div className='border p-11 m-4 border-slate-400 rounded-md'>
            <h2 className='text-amber-500 text-6xl font-bold'>
            <CountUp 
                end={53}
                duration={5}
                /><sup className='text-amber-500 text-4xl'>+</sup></h2>
            <div className='mt-3 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
</svg>

                <span className='text-md text-white ml-3'>AWARDS WON</span>
            </div>
          </div>
      </div>
    </div>
      </div>
      
    </div>
  </div>
</section>
        </div>
    );
};

export default About;