import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeroImage from "../components/HeroImage";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading="CONTACT." text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
