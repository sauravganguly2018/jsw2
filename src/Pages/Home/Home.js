import React, { useState, useEffect } from "react";
import "./Home.scss";
import Header from "../../Components/CommonComponents/Header/Header";
import Landing from "../../Components/Landing/Landing";
import Joining from "../../Components/Joining/Joining";
import Discover from "../../Components/Discover/Discover";
import Testimonials from "../../Components/Testimonials/Testimonials";
import UpcomingEvents from "../../Components/UpcomingEvents/UpcomingEvents";
import Collaborate from "../../Components/Collaborate/Collaborate";
import Partners from "../../Components/Partners/Partners";
import Footer from "../../Components/CommonComponents/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Joining />
      <Discover />
      <Testimonials />
      <UpcomingEvents />
      <Collaborate />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
