import React from 'react';

const HowWeBuild = () => {
  const steps = [
    { stepNumber: '01', stepDescription: '3D Conception & Design' },
    { stepNumber: '02', stepDescription: 'Interaction Design' },
    { stepNumber: '03', stepDescription: 'VR World User Testing' },
    { stepNumber: '04', stepDescription: 'Hydra VR Deploy' },
  ];

  return (
    <div>
      <div className='container mx-auto py-[50px]'>
        <div className='flex justify-between items-center flex-col lg:flex-row gap-4'>
          <div className='flex justify-between items-center flex-col lg:flex-row'>
            <h1 className='text-3xl flex-1'>HOW WE BUILD</h1>
            <p className='flex-1 text-center lg:text-left font-thin'>
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center rounded-[20px] gap-4 text-center p-6 py-[50px]'>
          {steps.map((step) => {
            return (
              <div className='flex justify-between items-center flex-col gap-8'>
                <div className='flex justify-center rounded-full w-[100px] h-[100px] bg-primary items-center text-3xl font-semibold box-shadow'>
                  {step.stepNumber}
                </div>
                <h5>{step.stepDescription}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWeBuild;
