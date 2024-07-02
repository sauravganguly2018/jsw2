import React, { useEffect } from 'react';
import Footer from "../../Layout/Footer/Footer";
import PartnerRegistrationComponent from "../../Components/PartnerRegistrationComponent/PartnerRegistrationComponent";
import "./PartnerRegistration.scss";


const PartnerRegistration = () => {

    useEffect(() => {
      // Scroll to the top of the page on component mount
      window.scrollTo(0, 0);
    }, []); 

  return (
    <>
        <PartnerRegistrationComponent/>
        <Footer/>
    </>
  )
}

export default PartnerRegistration
