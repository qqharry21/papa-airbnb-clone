import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2x:h-[700px]'>
      <Image
        src='/banner.jpg'
        layout='fill'
        // layout='responsive'
        // height={400}
        // width={600}
        // objectFit='contain'
        objectFit='cover'
      />
      <div className='absolute top-2/4 w-full text-center'>
        <p className='text-white text-sm sm:text-2xl'>
          Not sure where to go? Prefect.
        </p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3  hover:shadow-md hover:shadow-purple-500 duration-200 ease-linear transition-shadow'>
          Let me help you!
        </button>
      </div>
    </div>
  );
};

export default Banner;
