import React, { Suspense } from 'react';
import '../assets/styles/App.scss';
import Spinner from '../Spinner/Spinner.js';

const ShorterLinks = React.lazy(() => import('../components/ShorterLinks'));
const Advanced = React.lazy(() => import('../components/Advanced'));
const Boost = React.lazy(() => import('../components/Boost'));

const Home = () => {
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <ShorterLinks />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Advanced />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Boost />
      </Suspense>
    </div>
  );
};

export default Home;
