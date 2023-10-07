import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-xl font-semibold'>Journalism Without Fear or Favour</p>
            <p>{moment().format("MMM Do YY")}</p>
        </div>
    );
};

export default Header;