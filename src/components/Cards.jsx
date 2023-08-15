import React from 'react';
import simulation from '../assets/simulation.png';
import education from '../assets/education.png';
import selfcare from '../assets/selfcare.png';
import outdoor from '../assets/outdoor.png';

const Cards = () => {
  const data = [
    {
      image: simulation,
      name: 'SIMULATION',
      description:
        'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      image: education,
      name: 'EDUCATION',
      description:
        'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      image: selfcare,
      name: 'SELF-CARE',
      description:
        'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
    {
      image: outdoor,
      name: 'OUTDOOR',
      description:
        'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
    },
  ];

  return (
    <div>
      <div className='container mx-auto py-[50px]'>
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center gap-[10px]'>
          {data.map((card) => {
            return (
              <div className='flex flex-col justify-between items-center bg-gradient-to-t from-[#211E2E] rounded-[20px] gap-4 text-center p-6'>
                <img src={card.image} alt={card.name} className='rounded-full w-[100px]'/>
                <h3>{card.name}</h3>
                <p className='text-sm'>{card.description}</p>
                <button className='btn'>TRY IT NOW</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
