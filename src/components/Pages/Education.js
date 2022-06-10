import React from 'react';

const Education = () => {
    return (
        <section>
            <h2 className='text-pureWhite text-5xl'>Education & Experience</h2>
        <div class="bg-black text-white pb-5">
        <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"   data-aos-duration="3500"
        data-aos-easing="ease-in-out"
        data-aos="fade-right">
            <p class="ml-2 text-primary uppercase tracking-loose">Working Process</p>
            <p class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
              fest.
            </p>
            
          </div>
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky"   data-aos-duration="6500"
        data-aos-easing="ease-in-out"
        data-aos="zoom-in">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden p-10 h-full">
                <div class="border-2-2 border-yellow-555 absolute h-full border"
                style={{right:'50%',border: '2px solid #FFC100', borderRadius: '1%'}}
                 ></div>
                <div class="border-2-2 border-yellow-555 absolute h-full border"
                style={{left:'50%',border: '2px solid #FFC100', borderRadius: '1%'}}></div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-yellow-300">1-6 Nov, 2021</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl text-primary">WEB DEVELOPER <br /> AT PROGRAMING HERO</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    I became a Mern Stack Web Developer through programming heroes through dedication and hard work.
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1  w-5/12 px-1 py-4 text-left">
                    <p class="mb-3 text-base text-yellow-300">6-9 May, 2018</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl text-primary">UI/UX DESIGNER </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Ability to think creatively Mathematical aptitude and strong problem-solving skills Excellent IT and programming skills Excellent organisational, time and project management skills Accuracy and attention to detail An understanding of the latest trends.
                    </p>
                  </div>
                </div>
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-yellow-300"> 10 Jun, 2017</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl text-primary">CONSULTANT</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Collaborating with clients and stakeholders on website design.
                    Designing user-friendly and visually appealing interfaces.
                    Integrating data, applications, images, videos, and plugins.
                    Troubleshooting, testing, and demonstrating website prototypes.
                    Incorporating end-user feedback into the website design.
                    Completing the website development project on time and within budget.
                    Keeping up to date with developments, technologies, and trends in website design.
                    </p>
                  </div>
                </div>
    
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
    
                  <div class="order-1  w-5/12 px-1 py-4">
                    <p class="mb-3 text-base text-yellow-300">12 Feb, 2015</p>
                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left text-primary">BACHELOR DEGREE</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    Higher Secondary Bachelor of Science Computer Engineering Cal State Hayward.
                    </p>
                  </div>
                </div>
              </div>
              <img class="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
          </div>
        </div>
      </div>
      </section>
    );
};

export default Education;