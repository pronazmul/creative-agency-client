import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png'
import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from './firebaseConfig'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContex } from '../Main/Main'

firebase.initializeApp(firebaseConfig)

const UserLogin = () => {
    document.title='USER | LOGIN'
    //History Data To Redirect...
    // let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } }
    
    const [loggedInUser, setLoggedInUser] = useContext(userContex) 

    const provider = new firebase.auth.GoogleAuthProvider()
        const handleSignIn =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=> {   
          const {displayName, email, photoURL} = res.user
            const userData = {
              isSignIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            console.log(userData)
           // history.replace(from)
        })
      }

    return (
            <div className='container'>
                <div className="row mt-5 d-flex flex-column">
                <Link to='/'><img className='d-block mx-auto' src={logo} height='60' alt="" /></Link>
                    <div className="col-md-5 mx-auto mt-4 py-5">
                        <div className="card shadow">
                            <div className="card-body text-center py-5">
                                <h3 className='text-secondary'>User Login</h3>
                                <button onClick={handleSignIn} className='btn btn-outline-dark my-2'> <span className='mr-4'><img height='30' src="https://i.ibb.co/9vjdGtz/google.png" alt=""/></span> Sign in With Google</button>
                                <p className='lead small'>Don't Have An Account? <a href='https://accounts.google.com/' target='_blank'>Create an Account</a></p>
                                <Link to='/adminlogin' className = 'd-block mx-auto btn btn-outline-dark mt-4'>Login As Admin</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default UserLogin;