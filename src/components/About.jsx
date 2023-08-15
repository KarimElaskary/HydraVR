import React from 'react';
import pexelsshvets from '../assets/pexelsshvets.png';

const About = () => {
  return (
    <div>
      <div className='container mx-auto py-[50px]'>
        <div className='flex justify-center lg:justify-between items-center gap-11 flex-col lg:flex-row'>
          <div className='flex-1 justify-center items-center'>
            <img src={pexelsshvets} alt='' className='about-img max-w-[100%]' />
          </div>
          <div className='flex-1 flex-col space-y-[30px]'>
            <div>
              <h1>ABOUT</h1>
              <h3 className='font-thin'>HYDRA VR</h3>
            </div>
            <p>
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <button className='btn'>LET’S GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
