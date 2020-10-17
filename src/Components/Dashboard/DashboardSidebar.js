import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const DashboardSidebar = ({ Component, setComponent, isAdmin }) => {
    return (
        <div className="col-md-3 h-100">
            {isAdmin ?
                <ul className="nav flex-column w-75 mx-auto">
                    <li className="nav-item mb-2">
                        <Link onClick={() => setComponent('serviceStatus')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'serviceStatus' && 'active'}`} to="#">
                            <FontAwesomeIcon className='mr-2' icon={faListAlt}></FontAwesomeIcon> Service List</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link onClick={() => setComponent('addService')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'addService' && 'active'}`} to="#">
                            <FontAwesomeIcon className='mr-2' icon={faPlusCircle}></FontAwesomeIcon> Add Service</Link>
                    </li>

                    <li className="nav-item">
                        <Link onClick={() => setComponent('makeAdmin')} className={`nav-link font-weight-bold btn btn-outline-dark border-0 text-left ${Component === 'makeAdmin' && 'active'}`} to="#">
                            <FontAwesomeIcon className='mr-2' icon={faUserPlus}></FontAwesomeIcon> Make Admin</Link>
                    </li>
                </ul>
                :
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
            }

        </div>
    );
};

export default DashboardSidebar