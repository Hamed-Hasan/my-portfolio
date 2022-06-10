import React from 'react';

const Manufacture = () => {
    return (
        <div>
            
<div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 px-4 ">

<div id="viewerBox" class="lg:p-10 md:p-6 p-4 shadow-2xl rounded-3xl bg-slate-700 dark:bg-gray-900 ">

  <div class="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center items-center lg:space-x-8">
    




     
  <div class="carousel w-full" >
<div id="slide2" class="carousel-item relative w-full"style={{height:'550px'}}>
  <img src="https://i.ibb.co/Mhv9zhW/m4.png" class="w-full" />
  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" class="btn btn-circle">❮</a> 
    <a href="#slide3" class="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" class="carousel-item relative w-full"style={{height:'550px'}}>
  <img src="https://i.ibb.co/nPQC9Sv/m2.png" class="w-full" />
  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" class="btn btn-circle">❮</a> 
    <a href="#slide4" class="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide4" class="carousel-item relative w-full"style={{height:'550px'}}>
  <img src="https://i.ibb.co/1zDxsFx/m3.png" class="w-full" />
  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" class="btn btn-circle">❮</a> 
    <a href="#slide1" class="btn btn-circle">❯</a>
  </div>
</div>
</div>

    <div class="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
      <h1 class="text-3xl lg:text-4xl font-semibold  dark:text-white text-primary">Manufacture Product</h1>
      <p class=" leading-normal dark:text-white mt-2 text-sm text-pureWhite">Overview: A charity website with a registration form to join and register in interested field. Save user info in database
including a dashboard to manage admin panel Payment Gateway and services where an admin can add or remove a service
and able to manage all the services placed by users. And also there is a review form to leave a review for the clients and it will
show up on the homepage. and including admin can making admin another user & using remove admin and also include
admin can change there profile update user can’t access admin manage order add order page only admin allowed</p>
      <div className='mt-3 grid grid-cols-3 gap-4'>
                           <p className=' mr-2 mb-3 text-lg font-bold text-white  border-teal-400 border-2 rounded-lg p-2'>React Js</p>
                             <p className='text-lg mr-2  font-bold text-white  border-teal-400 border-2 rounded-lg p-2 '>Firebase</p>
                             <p className='text-lg  mr-2  font-bold text-white  border-teal-400 border-2 rounded-lg p-2'>Node Js</p> <br />
                             <p className=' text-lg mr-2  font-bold text-white  border-teal-400 border-2 rounded-lg p-2'>MongoDB</p>
                             <p className=' text-lg mr-2  font-bold text-white  border-teal-400 border-2 rounded-lg p-2'>Express Js</p>
                         </div>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Manufacture;