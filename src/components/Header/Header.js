import React from 'react';
import './Header.css'
import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillMedicineBox } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

    

    return (
        <div className=''>
            <div  className="header">
   
                <ul className='hidden lg:block'>
                    <li className='icon-box'>
                <AiFillHome className='icon'/>
                <Link to='/' >Home</Link>
                    </li>
                    <li className='icon-box'>
                <FaUserGraduate className='icon'/>
                <Link to='/about' >About</Link>
                    </li>
                    <li className='icon-box'>
                <AiFillMedicineBox  className='icon'/>
                <Link to='/portfolio' >Portfolio</Link>
                    </li>
                    <li className='icon-box'>
                <AiFillContacts className='icon'/>
                <Link to='/contact' >Contact</Link>
                    </li>
                </ul>

             
            </div>
           <div className='lg:hidden fixed w-full z-40 bottom-0 left-0'>
           <ul className='py-2 flex items-center justify-evenly bg-slate-900'>
                <NavLink to='/' className='' >
                <li className='bg-slate-800 p-4 cursor-pointer hover:bg-amber-500 transition-all rounded-full'>
               
                <AiFillHome className='text-white text-xl'/>
                    </li>
                </NavLink>
                <NavLink to='/about' >
                    <li className='bg-slate-800 p-4 cursor-pointer hover:bg-amber-500 transition-all rounded-full'>
               
                <FaUserGraduate className='text-white text-xl'/>
                    </li>
                </NavLink>
                <NavLink to='/portfolio' >
                    <li className='bg-slate-800 p-4 cursor-pointer hover:bg-amber-500 transition-all rounded-full'>
                
                <AiFillMedicineBox  className='text-white text-xl'/>
                    </li>
                </NavLink>
                <NavLink to='/contact' >
                    <li className='bg-slate-800 p-4 cursor-pointer hover:bg-amber-500 transition-all rounded-full'>
               
                <AiFillContacts className='text-white text-xl'/>
                    </li>
                </NavLink>
                </ul>
           </div>
        </div>
    );
};

export default Header;