import Image from 'next/image';
import React from 'react';
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center my-auto cursor-pointer h-12 sm:h-16 w-[7.5rem] sm:w-40'>
        <Image
          src='/header.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle */}
      <div className='items-center md:border-2 rounded-full py-2 md:shadow-md hidden md:inline-flex justify-between p-2'>
        <input
          type='text'
          className='bg-transparent pl-2 outline-none text-gray-600 placeholder-gray-400'
          placeholder='Start your search...'
        />
        <SearchIcon className='h-8 w-8 text-white bg-main rounded-full p-2 cursor-pointer hidden md:inline-flex min-w-fit' />
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden lg:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      {/* Mobile */}
      {/* <div className='inline-flex md:hidden items-center justify-end'>
        <SearchIcon className='h-8 w-8 text-main rounded-full cursor-pointer mx-2' />
      </div> */}
    </header>
  );
};

export default Header;
