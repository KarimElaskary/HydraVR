import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='container mx-auto py-[50px]'>
      <div className='flex items-center justify-between px-4'>
        <div>
          <img src={logo} alt='Hydra logo' className='w-[50px] h-[50px]' />
        </div>
        <div className='nav-bar-holder lg:flex'>
          <ul
            className={`flex items-center justify-between gap-4 text-white ${
              showNav ? 'block' : 'hidden'
            } lg:flex`}
          >
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TECHNOLOGIES</li>
            <li>HOW TO</li>
          </ul>
        </div>
        <AiOutlineMenu
          className='lg:hidden text-primary text-2xl'
          onClick={toggleNav}
        />
        <div className='hidden lg:flex items-center justify-between gap-3'>
          <button className='nav-btn'>CONTACT US</button>
          <button className='btn'>JOIN HYDRA</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
