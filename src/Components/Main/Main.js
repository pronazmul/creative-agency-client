import React, { createContext, useState } from 'react'
import HomePage from '../HomePage/HomePage'
import UserLogin from '../Login/UserLogin'
import AdminSubscribe from '../Login/AdminSubscribe'
import ProtectedRoute from '../Login/ProtectedRoute'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom"
import Dashboard from '../Dashboard/Dashboard'

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

                    <Route path='/AdminSubscribe'>
                        <AdminSubscribe></AdminSubscribe>
                    </Route>

                    <ProtectedRoute path='/dashboard/:key?'>
                        <Dashboard></Dashboard>
                    </ProtectedRoute>

                    <Route path='*'>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </userContex.Provider>
    )
}

export default Main;