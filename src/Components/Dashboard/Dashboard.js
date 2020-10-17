import React, { useState } from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardSidebar from './DashboardSidebar'
import DashboardBody from './DashboardBody'
import { useContext } from 'react';
import { userContex } from '../Main/Main';
import { useEffect } from 'react';

const Dashboard = () => {
    document.title = 'DASHBOARD'
    const [loggedInUser, setLoggedInUser] = useContext(userContex)
    const [isAdmin, setAdmin] = useState(false)
    const [AdminComponent, setAdminComponent] = useState('serviceStatus')
    const [UserComponent, setUserComponent] = useState('order')
    
    useEffect(() => {
        fetch(`http://localhost:5000/findAdmin/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    },[])

    console.log(loggedInUser)
    return (
        <div style={{ height: '100vh' }} className="container-fluid">
            {/* Dashboard Header */}
            {isAdmin ? <DashboardHeader Component={AdminComponent}></DashboardHeader> : <DashboardHeader Component={UserComponent}></DashboardHeader>}
            <div className="row" style={{ minHeight: '80vh' }}>
                {/* Dashboard Sidebar */}
                {isAdmin ? <DashboardSidebar Component={AdminComponent} setComponent={setAdminComponent} isAdmin={isAdmin}></DashboardSidebar> : <DashboardSidebar Component={UserComponent} setComponent={setUserComponent} isAdmin={isAdmin}></DashboardSidebar>}
                {/* Dashboard Body */}
                {isAdmin ? <DashboardBody Component={AdminComponent}></DashboardBody> : <DashboardBody Component={UserComponent}></DashboardBody>}
            </div>
        </div>
    );
};

export default Dashboard;