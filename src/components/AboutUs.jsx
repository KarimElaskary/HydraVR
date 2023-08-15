import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BiMessageAltDetail } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className='py-[100px]'>
      <div className='container mx-auto'>
        <div className='flex justify-between flex-col lg:flex-row space-y-10 lg:space-y-0 items-center about-bg p-[20px] rounded-full'>
          <div className='flex justify-between items-center gap-2'>
            <CiLocationOn className='text-[35px] text-primary' />
            <div>
              <h1>Pay Us a Visit</h1>
              <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <LiaPhoneVolumeSolid className='text-[35px] text-primary' />
            <div>
              <h1>Give Us a Call</h1>
              <p>(110) 1111-1010</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <BiMessageAltDetail className='text-[35px] text-primary' />
            <div>
              <h1>Send Us a Message</h1>
              <p>Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
