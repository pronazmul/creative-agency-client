import React from 'react'
import Header from './Header/Header'
import TrustedByCompanies from './TrustedByCompanies/TrustedByCompanies'

const HomePage = () => {
    document.title="HOME | CREATIVE AGENCY"
    return (
        <>
            <Header></Header>
            <TrustedByCompanies></TrustedByCompanies>
        </>
    );
};

export default HomePage;