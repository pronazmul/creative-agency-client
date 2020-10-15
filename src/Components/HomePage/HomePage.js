import React from 'react'
import Feedback from './Feedback/Feedback'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Services from './Services/Services'
import Slider from './Slider/Slider'
import TrustedByCompanies from './TrustedByCompanies/TrustedByCompanies'

const HomePage = () => {
    document.title="HOME | CREATIVE AGENCY"
    return (
        <>
            <Header></Header>
            <TrustedByCompanies></TrustedByCompanies>
            <Services></Services>
            <Slider></Slider>
            <Feedback></Feedback>
            <Footer></Footer>
        </>
    );
};

export default HomePage;