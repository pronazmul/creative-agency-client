import React, { useContext } from 'react'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom'
import { userContex } from '../../Main/Main';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContex)

    return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light py-4">
                    <Link className="navbar-brand" to='/'>
                        <img height='60' src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="#">Our Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="#">Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="#">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4 btn btn-dark text-light px-5" to='/login'>Login</Link>
                            </li>                  
                            
                        </ul>
                    </div>
                </nav>
            </div>
    );
};

export default Navbar;


                            