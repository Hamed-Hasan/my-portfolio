import React from 'react';
import './Header.css'
import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillMedicineBox } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Header = () => {

    

    return (
        <div>
            <div  className="header">
   
                <ul>
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
        </div>
    );
};

export default Header;