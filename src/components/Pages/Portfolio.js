
import React from 'react';
import Tabs, {Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import portfolio1 from '../../assests/images/portfolio1.png'
import portfolio2 from '../../assests/images/portfolio2.png'
import portfolio3 from '../../assests/images/portfolio3.png'
import portfolio4 from '../../assests/images/portfolio4.png'
import p1 from '../../assests/images/p1.png'
import d2 from '../../assests/images/d2.png'
import e1 from '../../assests/images/e1.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {

    const projects = [
        {
            name: 'Manufacture Product ',
            img: portfolio1,
          
            _id: 1
        },
        {
            name: 'Doctors Appointment ',
            img: portfolio2,
            description: 'doctors portal with google login feature including a dashboard to manage admin panel Payment Gatway and services where an admin can add or remove a doctor and able to manage all the appointments placed by patients. And also there is a review form to leave review for the clients and it will show up on homepage.',
            _id: 2
        },
        {
            name: 'Electronics Product',
            img: portfolio3,
            description: 'It"s a service based website including an admin panel to add or remove services. Where an admin can easily add or remove services from user. And also there is a myItem page form to leave own product for the clients and it will show up on myItem page.',
            _id: 3
        },
        {
            name: 'Travel Authentication',
            img: portfolio4,
            description: 'Travel Authentication with a google login feature including a Protected route to manage the services where an user can login and register based to manage all the checkout placed by user.',
            _id: 4
        },
    ]




    return (
        <div className='bg-accent py-10 pb-44'>


      <div className="container mx-auto">
      <div className="title-section">
                <h1>my <span className='text-amber-500'
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in">Portfolio</span></h1>
                <span className='title-bg'
                  data-aos-duration="3500"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-right">works</span>
            </div>

       
            <Tabs activeTab="1" className='grid grid-cols-1 gap-3 justify-items-center mt-2' activityClassName="bg-success" onClick={(event, tab) => console.log(event, tab)}>
            <Tab title="ALL" className="mr-3">
              
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div class="wrapper"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos="zoom-in">
                    <div class="card front-face">
                       <img src={p1}/>
             
                    </div>
                    <div class="card bg-primary back-face">
                    <img src={p1}/>
                       <div class="info">
                          <div class="text-3xl text-center font-bold text-accent mb-12">
                          Manufacture Product
                          </div>
                        
                       <ul>
               <a href="https://manufacture-development.web.app/" target='_blank'>Live </a>
               <a href="https://github.com/Hamed-Hasan/assignment-twelve-mongodb-client" target="_blank">Client</a>
               <a href="https://github.com/Hamed-Hasan/assignment-twelve-mongodb-server" target="_blank">Server</a>
               <Link to='/manufacture'>Details</Link>
               
              
            </ul>
                       </div>
                    </div>
                 </div>
                 
                 <div class="wrapper"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos="zoom-in">
                    <div class="card front-face">
                       <img src={d2}/>
             
                    </div>
                    <div class="card bg-primary back-face">
                    <img src={d2}/>
                       <div class="info">
                          <div class="text-3xl text-center font-bold text-accent mb-12">
                          Doctors Appointment
                          </div>
                        
                       <ul>
               <a href="https://manufacture-development.web.app/" target='_blank'>Live </a>
               <a href="https://github.com/Hamed-Hasan/assignment-twelve-mongodb-client" target="_blank">Client</a>
               <a href="https://github.com/Hamed-Hasan/assignment-twelve-mongodb-server" target="_blank">Server</a>
               <Link to='/doctor'>Details</Link>
               
              
            </ul>
                       </div>
                    </div>
                 </div>
                 <div class="wrapper"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos="zoom-in">
                    <div class="card front-face">
                       <img src={e1}/>
             
                    </div>
                    <div class="card bg-primary back-face">
                    <img src={e1}/>
                       <div class="info">
                          <div class="text-3xl text-center font-bold text-accent mb-12">
                          Electronics Product
                          </div>
                        
                       <ul>
               <a href="https://manufacture-development.web.app/" target='_blank'>Live </a>
               <a href="https://github.com/Hamed-Hasan/assignment-twelve-mongodb-client" target="_blank">Client</a>
               <a href="https://github.com/Hamed-Hasan/assignment-twelve-mongodb-server" target="_blank">Server</a>
               <Link to='/elect'>Details</Link>
               
              
            </ul>
                       </div>
                    </div>
                 </div>
               
                    <div class="wrapper"
                      data-aos-duration="4500"
                      data-aos-easing="ease-in-out"
                      data-aos="zoom-in">
                    <div class="card front-face">
                       <img src={portfolio4}/>
                    </div>
                    <div class="card bg-primary back-face">
                  
                       <div class="info">
                          <div class="text-md text-center font-bold text-accent">
                          Travel Authentication
                          </div>
                         <div className='mt-3'>
                             <span className=' mr-0 p-1 text-sm text-accent'>React Js</span>
                             <span className='p-1 text-sm text-accent'>Firebase</span>
                             
                         </div>
                       </div>
                       <ul>
               <a href="https://electronics-zone.web.app/" target='_blank'>Live </a>
               <a href="https://github.com/Hamed-Hasan/assignment-ten-firebase" target="_blank">Client</a>
            
               
              
            </ul>
                    </div>
                 </div>
                 
               
            </div>
            </Tab>
            <Tab title="PORTFOLIO" className="mr-3">
                <div className="mt-3">
                    Tab 2 content
                </div>
            </Tab>
            <Tab title="SHOP" className="mr-3">
                <div className="mt-3">
                    Tab 3 content
                </div>
            </Tab>
            <Tab title="APP" className="mr-3">
                <div className="mt-3">
                    Tab 4 content
                </div>
            </Tab>
            <Tab title="WEB" className="mr-3">
                <div className="mt-3">
                    Tab 5 content
                </div>
            </Tab>
        </Tabs>


      </div>
        </div>
    );
};




export default Portfolio;


