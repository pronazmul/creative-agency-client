import React from 'react';

const Reviews = () => {
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="col-md-8 mx-auto py-5">
                <div className="form-group">
                    <input placeholder='Your Name' className='form-control mb-1' type="text" />
                    <input placeholder='Company Name' className='form-control mb-1' type="email" />
                    <textarea placeholder='Details Here' className='form-control' rows="2"></textarea>
                </div>
                <input value='Add Order' className='btn btn-outline-dark mt-2' type="submit" />
            </div>
        </div>
    );
};

export default Reviews;