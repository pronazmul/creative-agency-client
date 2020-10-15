import React, { useContext, useState } from 'react'
import logo from '../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userContex } from '../Main/Main'
import { useForm } from 'react-hook-form'
// import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import firebaseConfig from './firebaseConfig'

// firebase.initializeApp(firebaseConfig)

const AdminLogin = () => {
    
    document.title='ADMIN | LOGIN'
    const [loggedInUser, setLoggedInUser] = useContext(userContex)
    const [accState, setAccState] = useState(true)

    // Mannage Login Resistration...... 
    	const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => { 
                    console.log(data)
            // if(!accState){
            //     createUser(data.email, data.password, data.name)
            //     .then(message =>{ 
            //         setAccState(true)
            //     })
            //     .catch(error => alert(error))
            // }
                
            // if(accState){
            //     signInEmailPass(data.email, data.password)
            //     .then(res => {
            //         setLoggedInUser(res)
            //         history.replace(from)                    
            //     })
            //     .catch(error => alert(error))   
            // }
         }

    //History Data To Redirect...
    // let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } }

    return (
        <div className='container'>
            <div className="row mt-5 d-flex flex-column">
                <Link to='/'><img className='d-block mx-auto' src={logo} height='60' alt="" /></Link>
                <div className="col-md-6 mx-auto mt-4 py-2">
                    <div className="card shadow">
                        <div className="card-body text-center py-5">
                            {accState ?
                                <>
                                    <h3 className='text-center textColor1 font-weight-bold mb-3'>ADMIN | LOGIN</h3>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <input ref={register({ required: true })} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email" />
                                        {errors.email && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required: true })} name='password' placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password" />
                                        {errors.password && <span className="text-danger">* Required</span>}<br/>
                                        <Link className='text-secondary' onClick={() => setAccState(!accState)}>Create An account</Link>
                                        <button type='submit' className='btn btn-outline-dark btn-block my-4'>Login</button>
                                    </form>
                                </>
                                :
                                <>
                                    <h3 className='text-center textColor1 font-weight-bold mb-3'>ADMIN | REGISTER</h3>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <input ref={register({ required:true})} name='userName' placeholder='Name' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="text" />
                                        {errors.userName && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required:true})} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email" />
                                        {errors.email && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required:true})} name='password' placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password" />
                                        {errors.password && <span className="text-danger">* Required</span>}<br/>
                                        <Link className='text-secondary' onClick={() => setAccState(!accState)}>Already Have An Account</Link>
                                        <button type='submit' className='btn btn-outline-dark btn-block my-4'>Registration</button>
                                    </form>
                                </>
                            }



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;