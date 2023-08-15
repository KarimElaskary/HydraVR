import React from 'react';
import unrealengine from '../assets/unrealengine.png';
import unity from '../assets/unity.png';
import oculus from '../assets/oculus.png';
import vive from '../assets/vive.png';

const Technologies = () => {
  return (
    <div>
      <div className='container mx-auto py-[50px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
          <img src={unrealengine} alt='unrealengine' className='w-[100px]'/>
          <img src={unity} alt='unity' className='w-[150px]'/>
          <img src={oculus} alt='oculus' className='w-[150px]'/>
          <img src={vive} alt='vive' className='w-[150px]'/>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
