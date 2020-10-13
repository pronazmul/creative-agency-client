import React from 'react';
import Bannar from '../Bannar/Bannar';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-bg'>
            <Navbar></Navbar>
            <Bannar></Bannar>
        </div>
    );
};

export default Header;