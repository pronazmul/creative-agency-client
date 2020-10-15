import React from 'react';

const MakeAdmin = () => {
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="form-inline py-5">
                <input className='form-control w-75 mr-3' placeholder="Enter Email" type="text" />
                <button className='btn btn-outline-success'>Submit</button>
            </div>
        </div>
    );
};

export default MakeAdmin;