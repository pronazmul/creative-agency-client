import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logos/logo.png'
import { userContex } from '../Main/Main';

const DashboardHeader = ({Component}) => {    
    const [loggedInUser, setLoggedInUser] = useContext(userContex) 
    return (
        <div>
            <div className="row d-flex flex-row align-items-center" style={{ height: '20vh' }}>
                <div className="col-md-3">
                    <Link to='/'><img height='60' src={logo} alt="" /></Link>
                </div>
                <div className="col-md-9"> 
                    <div className="row d-flex flex-row justify-content-between">
                        <div className="col-md-3">
                            {Component === 'serviceStatus' && <h3>Service Status</h3>}
                            {Component === 'addService' && <h3>Add New Service</h3>}
                            {Component === 'makeAdmin' && <h3>Make Admin</h3>}   
                            {Component === 'order' && <h3>Add Order</h3>}
                            {Component === 'serviceList' && <h3>Service List</h3>}
                            {Component === 'review' && <h3>Add A Review</h3>}                        
                        </div>
                        <div className="col-md-4"><h3 className='d-inline'>{loggedInUser.name}</h3><button onClick={()=>setLoggedInUser({})} className='btn btn-danger ml-3'>Logout</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;