import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContex } from '../Main/Main'
import { useForm } from 'react-hook-form'
import { initializeFirebase, handleGoogleSignIn, createUser, signInEmailPass } from './FirebaseAuth';
import { useState } from 'react';

initializeFirebase()

const UserLogin = () => {
    document.title='USER | LOGIN'
    //History Data To Redirect...
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }
    
    const [loggedInUser, setLoggedInUser] = useContext(userContex) 
    const [accState, setAccState] = useState(true)

    // Mannage Login Resistration...... 
    	const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => { 
            console.log(data)

            if(!accState){
                createUser(data.email, data.password, data.userName)
                .then(message =>{ 
                    alert("Account Created Successfully")
                    setAccState(true)
                })
                .catch(error => alert(error))
            }
                
            if(accState){
                signInEmailPass(data.email, data.password)
                .then(res => {
                    setLoggedInUser(res)
                    history.replace(from)                    
                })
                .catch(error => alert(error))   
            }
         }

    //Mannage Google Sign in...
    const googleLogin =() =>{
        handleGoogleSignIn()
        .then(result => {
            setLoggedInUser(result)
            history.replace(from) 
        })
    } 

    return (
            <div className='container'>
                <div className="row mt-5 d-flex flex-column">
                <Link to='/'><img className='d-block mx-auto' src={logo} height='60' alt="" /></Link>
                    <div className="col-md-5 mx-auto mt-4 py-3">
                    <div className="card shadow">
                        <div className="card-body text-center py-3">
                            {accState ?
                                <>
                                    <h3 className='text-center textColor1 font-weight-bold mb-2'>LOGIN</h3>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <input ref={register({ required: true })} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email" />
                                        {errors.email && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required: true })} name='password' placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password" />
                                        {errors.password && <span className="text-danger">* Required</span>}<br/>
                                        <Link className='text-secondary' onClick={() => setAccState(!accState)}>Create An account</Link>
                                        <button type='submit' className='btn btn-outline-dark btn-block my-2'>Login</button>
                                    </form>
                                </>
                                :
                                <>
                                    <h3 className='text-center textColor1 font-weight-bold mb-2'>REGISTER</h3>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <input ref={register({ required:true})} name='userName' placeholder='Name' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="text" />
                                        {errors.userName && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required:true})} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email" />
                                        {errors.email && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required:true})} name='password' placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password" />
                                        {errors.password && <span className="text-danger">* Required</span>}<br/>
                                        <Link className='text-secondary' onClick={() => setAccState(!accState)}>Already Have An Account</Link>
                                        <button type='submit' className='btn btn-outline-dark btn-block my-2'>Registration</button>
                                    </form>
                                </>
                            }
                                <button onClick={googleLogin} className='w-50 ml-0 btn btn-outline-dark my-2'> <span className='mr-2'><img height='20' src="https://i.ibb.co/9vjdGtz/google.png" alt=""/></span>Google Sign In</button>
                                <Link to='/AdminSubscribe' className = 'w-50 btn btn-outline-dark'>Subscribe As Admin</Link>

                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
    )
}
export default UserLogin;