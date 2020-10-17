import React from 'react'
import ServiceStatus from './Admin/ServiceStatus'
import AddService from './Admin/AddService'
import MakeAdmin from './Admin/MakeAdmin'
import Order from './User/Order'
import ServiceList from './User/ServiceList'
import Reviews from './User/Reviews'

const DashboardBody = ({Component}) => {
    return (
        <div className="col-md-9" style={{ backgroundColor: '#E5E5E5', minHeight: '80vh' }}>
            {Component === 'serviceStatus' && <ServiceStatus></ServiceStatus>}
            {Component === 'addService' && <AddService></AddService>}
            {Component === 'makeAdmin' && <MakeAdmin></MakeAdmin>}
            {Component === 'order' && <Order></Order>}
            {Component === 'serviceList' && <ServiceList></ServiceList>}
            {Component === 'review' && <Reviews></Reviews>}
        </div>
    );
};

export default DashboardBody;