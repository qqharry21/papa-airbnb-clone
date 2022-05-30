import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';
import { DateRange } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const router = useRouter();
  useEffect(() => {}, [searchInput]);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests: numOfGuests,
      },
    });
  };

  const selectRage = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className='sticky top-0 z-40 grid grid-cols-2 md:grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div
        className='relative flex items-center my-auto cursor-pointer h-12 sm:h-16 w-[7.5rem] sm:w-40'
        onClick={() => {
          router.push('/');
        }}
      >
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
          className='bg-transparent pl-2 outline-none text-gray-600 placeholder-gray-400 flex-grow'
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-2'>
          <DateRange
            ranges={[selectRage]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={['#FD5861']}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-lg pl-2 flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UserIcon className='h-5' />
            <input
              type='number'
              className='w-12 pl-2 text-lg outline-none text-main'
              value={numOfGuests}
              onChange={(e) => {
                setNumOfGuests(e.target.value);
              }}
              min={1}
            />
          </div>
          <div className='flex'>
            <button className='flex-grow text-gray-500' onClick={resetInput}>
              Cancel
            </button>
            <button className='flex-grow text-main' onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

Header.defaultProps = {
  placeholder: 'Start your search...',
};

export default Header;
