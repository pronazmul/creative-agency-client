import React from 'react';

const MakeAdmin = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const adminEmail = document.getElementById('email').value

        fetch(`http://localhost:5000/makeAdmin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: adminEmail })
        })
            .then(res => res.json())
            .then(data => alert('You Are Now Admin'))

        e.target.reset()
    }

    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="py-5">
                <form className=' w-50 mx-auto my-5' onSubmit={handleSubmit}>
                    <input id='email' className='form-control' placeholder="Enter Email To Make Admin" type="email" required />
                    <button className='btn btn-outline-dark mt-4 btn-block' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;