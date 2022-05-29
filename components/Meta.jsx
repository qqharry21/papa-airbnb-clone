/** @format */

import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const Meta = ({ title, keywords, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:title' content='Airbnb' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={image ? image : '/logo.png'} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='Airbnb' />
      <meta property='og:url' content='' />
      <link rel='icon' href='/logo.png' />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Airbnb',
  keywords: 'Airbnb',
  description: 'Airbnb',
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
