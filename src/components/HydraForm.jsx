import React from 'react';

const HydraForm = () => {
  return (
    <div className='form justify-center'>
      <div className='container mx-auto py-[10px]'>
        <div className='flex justify-center items-center flex-col gap-4 py-[40px]'>
          <h1>JOIN HYDRA</h1>
          <h5>Let’s Build Your VR Experience</h5>
        </div>
        <form className='flex flex-col gap-8 justify-center'>
          <div className='flex form-row'>
            <input type='text' required placeholder='First Name' />
            <input type='text' required placeholder='Last Name' />
          </div>
          <div className='flex form-row'>
            <input type='email' required placeholder='Email' />
            <input type='number' required placeholder='Phone Number' />
          </div>
          <input
            type='text'
            required
            placeholder='Subject'
            className='flex-1'
          />
          <textarea
            name='message'
            cols='30'
            rows='10'
            placeholder='Tell Us Something...'
          ></textarea>
          <button className='btn w-[200px] self-center'>SEND TO HYDRA</button>
        </form>
      </div>
    </div>
  );
};

export default HydraForm;
