import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimony from "./Testimony";

const Home = () => {
  return (
    <div className="px-5 lg:px-24 z-0">
      <Banner></Banner>
      <Info></Info>
          <Services></Services>
          <MakeAppointment></MakeAppointment>
      <Testimony></Testimony>
      <ContactUs></ContactUs>
          
    </div>
  );
};

export default Home;
