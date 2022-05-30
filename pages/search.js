import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react';
import InfoCards from '../components/InfoCards';
import { Layout } from '../components/layout';

const SearchPage = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <Layout
      title={`Search for ${location}`}
      placeholder={`${location} | ${range} | ${guests} guests`}
    >
      <main className='flex min-h-screen'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-gray-400 text-xs'>
            300+ Stays - <span className='text-main'>{range}</span> - for{' '}
            {guests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='space-x-4 hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap'>
            <p className='tag-button'> nCancellation Flexibility</p>
            <p className='tag-button'>Type of Place</p>
            <p className='tag-button'>Price</p>
            <p className='tag-button'>Rooms and Beds</p>
            <p className='tag-button'>More Filters</p>
          </div>
          <div className='flex flex-col'>
            {searchResults?.map((result, index) => (
              <InfoCards key={index} {...result} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SearchPage;

export const getServerSideProps = async (ctx) => {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );
  return {
    props: { searchResults },
  };
};
