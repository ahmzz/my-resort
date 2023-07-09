import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const Home = () => {
  
  
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe rooms starting at $150"
        >
          <Link to="/rooms" className="btn-primary">
            Visit Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
    </>
  );
};

export default Home;
