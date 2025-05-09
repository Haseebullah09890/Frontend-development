import React from 'react';

import Heros from '../components/Heros';
import JoinSteps from '../components/JoinStep';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
  <>
  <section id='heros'>
    <Heros/>
  </section>

  <section id='JoinSteps'>
    <JoinSteps/>
  </section>

  <section id='testimonials'>
    <Testimonials/>
  </section>
  
  



  </>
  );
};

export default Home;
