import React from 'react';
import Section1 from './Section1';
import OurService from './ourService';
import AboutUs from './aboutUs';
import Premium from './Premium';
import Discount from './Discount';
import { Fade } from 'react-awesome-reveal';
import NewArrival from './Arrivals';
import NavHeader from 'Components/NavHeader/NavHeader';

const index = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Fade>
          <Section1 />
          <OurService />
          <AboutUs />
          <Premium />
          <Discount />
          <NewArrival />
        </Fade>
      </main>
    </>
  );
};

export default index;