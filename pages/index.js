import React from 'react';
import Banner from '../components/Banner';
import LargeCards from '../components/LargeCards';
import { Layout } from '../components/layout';
import MediumCards from '../components/MediumCards';
import SmallCards from '../components/SmallCards';

export default function Home(props) {
  const { exploreData, anywhereData } = props;
  return (
    <Layout>
      {/* Banner */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 capitalize'>
            Explore Nearby
          </h2>
          {/* Pull data from server */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, index) => (
              <SmallCards key={index} {...item} />
            ))}
          </div>
        </section>
        <section className=''>
          <h2 className='text-4xl font-semibold py-8 capitalize'>
            Live Anywhere
          </h2>
          <div className='flex space-x-4 overflow-scroll scrollbar-hide overflow-y-hidden p-3'>
            {anywhereData?.map((item, index) => (
              <MediumCards key={index} {...item} />
            ))}
          </div>
        </section>

        <LargeCards
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoor'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const anywhereData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  );
  return {
    props: { exploreData: exploreData, anywhereData: anywhereData },
  };
};
