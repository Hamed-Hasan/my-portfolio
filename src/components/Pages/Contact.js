import React from 'react';
import { TbMessage2Share } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className='bg-[#000000e8] py-10 pb-24'>
      <div className="container mx-auto px-5  md:px-20">
      {/* <div className="title-section">
                <h1  data-aos-duration="1500"
       data-aos-easing="ease-in-out"
       data-aos="zoom-in">GET IN <span className='text-amber-500'>TOUCH</span></h1>
                <span className='title-bg'
                  data-aos-duration="4500"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in">CONTACT</span>
            </div> */}

            <div  class="md:flex flex-wrap items-center py-5">
            <div class="md:w-2/5 ...">
                <h2 className='text-white text-left  text-2xl font-bold'
                  data-aos-duration="2500"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-right">DON'T BE SHY !</h2>
                <p className='text-left text-slate-400 my-5'   data-aos-duration="3500"
       data-aos-easing="ease-in-out"
       data-aos="fade-right">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className='flex items-center gap-3'
                  data-aos-duration="2500"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in">
                    <div>
                    <svg className='w-10'  style={{color: '#FFA001'}} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
</svg>
                    </div>
                    <div>
                        <p className='text-slate-400 text-md text-left'>ADDRESS POINT</p>
                        <p className='text-white text-md text-left'>Saudi Arabia Mecca</p>
                    </div>
                </div>
                <div className='flex items-center my-5 gap-3'>
                    <div>
   
<svg className='w-10'  style={{color: '#FFA001'}} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clip-rule="evenodd" />
</svg>
                    </div>
                    <div>
                        <p className='text-slate-400 text-md text-left'>MAIL ME</p>
                        <p className='text-white text-md text-left'>hamedhasan422421@gmail.com</p>
                    </div>
                </div>
                <div className='flex  items-center gap-3'>
                    <div>
        
<svg className='w-10'  style={{color: '#FFA001'}} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>
                    </div>
                    <div>

                        <p className='text-slate-400 text-md text-left'>PHONE ME</p>
                        <p className='text-white text-md text-left'>
                        +966 59 503 5008
                        </p>
                    </div>
                </div>
                <div className="social mt-10 flex items-center justify-around" style={{width: '160px'}}
                  data-aos-duration="5000"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in">
<a className="bg-slate-800 p-3 hover:bg-amber-500 transition-all rounded-full" target="_blank" href="https://www.linkedin.com/in/hamed-hasan/">
    <FaLinkedinIn className='text-white'/>
</a>
<a className="bg-slate-800 p-3 hover:bg-amber-500 transition-all rounded-full" target="_blank" href="https://www.facebook.com/hamed.y.hasan0/">
    <FaFacebookF className='text-white'/>
</a>
<a className="bg-slate-800 p-3 hover:bg-amber-500 transition-all rounded-full" target="_blank" href="https://github.com/hamed-hasan">
    <BsGithub className='text-white'/>
</a>
</div>
            </div>
            <div class="md:w-3/5 ...">
            <form className='contactUs'action="https://formspree.io/f/mgedqyev" method="post">
                <div class="md:flex items-center mt-12"
                  data-aos-duration="3500"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-right">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Name</label>
                        <input type="text" 
                        name='name'
                        class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label class="font-semibold leading-none text-gray-300">Email</label>
                        <input type="email" 
                        name='email'
                        class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <label class="font-semibold leading-none text-gray-300">Subject</label>
                        <input type="text" 
                        name='subject'
                        class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none text-gray-300">Message</label>
                        <textarea type="text"
                        name='message'
                         class="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                <button type='submit' className='contact-button border-2  border-primary hover:before:bg-primary  my-6'    data-aos-duration="5500"
       data-aos-easing="ease-in-out"
       data-aos="zoom-in">
             <span>Send Message</span>
             <span className='contact-button-icon'>

            <TbMessage2Share/>
             </span>
           </button>
           
                </div>
            </form>
            </div>
            </div>
      </div>
        </div>
    );
};

export default Contact;