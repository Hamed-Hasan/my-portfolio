import React from 'react';
import './Header.css'
import { AiFillHome } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import { AiFillMedicineBox } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';
const Header = () => {

    return (
        <div>
            <div  className="header">
   
                <ul>
                    <li className='icon-box'>
                <AiFillHome className='icon'/>
                <a href="#">Home</a>
                    </li>
                    <li className='icon-box'>
                <FaUserGraduate className='icon'/>
                <a href="#">About</a>
                    </li>
                    <li className='icon-box'>
                <AiFillMedicineBox  className='icon'/>
                <a href="#">Portfolio</a>
                    </li>
                    <li className='icon-box'>
                <AiFillContacts className='icon'/>
                <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;