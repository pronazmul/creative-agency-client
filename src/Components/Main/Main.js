import React, { createContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom"
import HomePage from '../HomePage/HomePage'

  export const userContex = createContext()
  
const Main = () => {
    const [loggedInUser, setLoggedInUser] = useState({})
    return (
        <userContex.Provider value ={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage></HomePage>
                    </Route>

                    {/* <ProtectedRoute path='/appoinment'>
                        <AppoinmentPage></AppoinmentPage>
                    </ProtectedRoute>

                    <Route path='/login'>
                        <Login></Login>
                    </Route> */}
                    
                    <Route path='*'>
                            <Redirect to="/" />
                        </Route>
                </Switch>            
            </Router>
        </userContex.Provider>
    )
}

export default Main;