import Image from 'next/image';
import React from 'react';

const SmallCards = ({ img, location, distance }) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-100 duration-200 transition ease-out p-2'>
      {/* Left */}
      <div className='relative h-16 w-16'>
        <Image layout='fill' src={img} className='rounded-lg' />
      </div>
      {/* Right */}
      <div className=''>
        <h2 className=''>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCards;
