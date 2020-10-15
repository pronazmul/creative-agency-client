import React, { createContext, useState } from 'react'
import HomePage from '../HomePage/HomePage'
import UserLogin from '../Login/UserLogin'
import AdminLogin from '../Login/AdminLogin'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom"
import AdminDashboard from '../Dashboard/AdminDashboard/AdminDashboard'
import UserDashboard from '../Dashboard/UserDashboard/UserDashboard'

export const userContex = createContext()

const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState({})
    return (
        <userContex.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>

                    <Route exact path='/'>
                        <HomePage></HomePage>
                    </Route>

                    <Route path='/userlogin'>
                        <UserLogin></UserLogin>
                    </Route>

                    <Route path='/adminlogin'>
                        <AdminLogin></AdminLogin>
                    </Route>

                    <Route path='/userDashboard'>
                        <UserDashboard></UserDashboard>
                    </Route>

                    <Route path='/adminDashboard'>
                        <AdminDashboard></AdminDashboard>
                    </Route>

                    {/*<ProtectedRoute path='/appoinment'>
                        <AppoinmentPage></AppoinmentPage>
                    </ProtectedRoute> */}

                    <Route path='*'>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </userContex.Provider>
    )
}

export default Main;