import React from 'react';
import { Helmet } from 'react-helmet-async';
import Goal from './Goal';

const Philosophy = () => {
  return (
    <div>
      <Helmet>
        <title>The Plan | SiDesigned</title>
      </Helmet>
      <Goal/>
    </div>
  )
}

export default Philosophy