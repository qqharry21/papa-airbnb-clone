import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

const InfoCards = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className='flex py-7 px-4 rounded-lg hover:scale-95 duration-200 transition ease-out hover:bg-gray-100 cursor-pointer hover:opacity-80 hover:shadow-lg first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          alt={title}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p className='text-gray-400'>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2'></div>
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 cursor-pointer text-main' />
            {star}
          </p>
          <div className=''>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
