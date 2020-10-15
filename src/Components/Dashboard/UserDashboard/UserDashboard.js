import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Order from './Order'
import ServiceList from './ServiceList'
import Reviews from './Reviews'

const AdminDashboard = () => {
    document.title='USER | DASHBOARD'
    const [Component, setComponent] = useState('order')

    return (
        <div style={{ height: '100vh' }} className="container-fluid">
            {/* Head Section */}
            <div className="row d-flex flex-row align-items-center" style={{ height: '20vh' }}>
                <div className="col-md-3">
                    <Link to='/'><img height='60' src={logo} alt="" /></Link>
                </div>
                <div className="col-md-9">
                    <div className="row d-flex flex-row justify-content-between">
                        <div className="col-md-3">
                            {Component === 'order' && <h4>Add Order</h4>}
                            {Component === 'serviceList' && <h4>Service List</h4>}
                            {Component === 'review' && <h4>Add A Review</h4>}                            
                        </div>
                        <div className="col-md-3"><h4>Pro Nazmul</h4></div>
                    </div>
                </div>
            </div>
            {/* Body Section */}
            <div className="row" style={{ minHeight: '80vh' }}>
                <div className="col-md-3 h-100">
                    <ul className="nav flex-column w-50 mx-auto">
                        <li className="nav-item mb-2">
                            <Link onClick={() => setComponent('order')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'order' && 'active'}`} to="#">
                                <FontAwesomeIcon className='mr-1' icon={faListAlt}></FontAwesomeIcon> Order</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link onClick={() => setComponent('serviceList')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'serviceList' && 'active'}`} to="#">
                                <FontAwesomeIcon className='mr-1' icon={faPlusCircle}></FontAwesomeIcon> Service List</Link>
                        </li>

                        <li className="nav-item">
                            <Link onClick={() => setComponent('review')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'review' && 'active'}`} to="#">
                                <FontAwesomeIcon className='mr-1' icon={faUserPlus}></FontAwesomeIcon> Review</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9" style={{ backgroundColor: '#E5E5E5', minHeight: '80vh' }}>
                    {Component === 'order' && <Order></Order>}
                    {Component === 'serviceList' && <ServiceList></ServiceList>}
                    {Component === 'review' && <Reviews></Reviews>}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;