import React from 'react';
import Frame from '../assets/Frame.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import pinterest from '../assets/pinterest.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';

const Footer = () => {
  return (
    <div>
      <div className='container mx-auto py-[70px]'>
        <div className='flex flex-col lg:flex-row text-center justify-between items-center text-white text-[14px]'>
          <div>
            <img src={Frame} alt='frame' className='w-[90px]' />
          </div>
          <div>
            <ul className='space-y-[20px]'>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>TECHNOLOFIES</li>
              <li>HOW TO</li>
              <li>JOIN HYDRA</li>
            </ul>
          </div>
          <div>
            <ul className='space-y-[20px]'>
              <li>F.A.Q</li>
              <li>SITEMAP</li>
              <li>CONDITIONS</li>
              <li>LICENSES</li>
            </ul>
          </div>
          <div className='space-y-[20px]'>
            <h1>SOCIALIZE WITH HYDRA</h1>
            <div className='flex gap-3'>
              <img src={facebook} alt='facebook' />
              <img src={twitter} alt='twitter' />
              <img src={youtube} alt='youtube' />
              <img src={pinterest} alt='pinterest' />
              <img src={linkedin} alt='linkedin' />
              <img src={instagram} alt='instagram' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center font-semibold py-[20px]'>
        <p>
          2023 © HYDRA LANDING PAGE - BY KARIM ELASKARY - ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
