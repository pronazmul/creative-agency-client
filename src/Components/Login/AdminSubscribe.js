import React, { useContext, useState } from 'react'
import logo from '../../images/logos/logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userContex } from '../Main/Main'

const AdminSubscribe = () => {

    document.title = 'ADMIN | SUBSCRIBE'
    const [loggedInUser, setLoggedInUser] = useContext(userContex)

const handleSubmit = (e)=>{
    e.preventDefault()
    const adminEmail = document.getElementById('email').value

    fetch(`http://localhost:5000/makeAdmin`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email:adminEmail})
       })
       .then(res=> res.json())
       .then(data=>alert('You Are Now Admin'))
       
       e.target.reset()
}


    return (
        <div className='container'>
            <div className="row mt-5 d-flex flex-column">
                <Link to='/'><img className='d-block mx-auto' src={logo} height='60' alt="" /></Link>
                <div className="col-md-6 mx-auto mt-4 py-2">
                    <div className="card shadow">
                        <div className="card-body text-center py-5">
                            <h3 className='text-center textColor1 font-weight-bold mb-5'>SUBSCRIBE AS ADMIN</h3>
                            <form className=" w-75 mx-auto" onSubmit={handleSubmit}>
                                <input id='email' placeholder='Email To Subscribe' className='form-control' type="email" required/>
                                <button type='submit' className='btn btn-outline-dark btn-block my-4'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminSubscribe;