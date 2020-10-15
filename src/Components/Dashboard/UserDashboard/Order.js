import React from 'react';

const Order = () => {
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="col-md-8 mx-auto py-5">
                <div className="form-group">
                    <input placeholder='Your Name/Company Name' className='form-control mb-1' type="text" />
                    <input placeholder='Your Email Address' className='form-control mb-1' type="email" />
                    <input placeholder='Your Graphic Design' className='form-control mb-1' type="text" />
                    <textarea placeholder='Your Project Details' className='form-control' rows="2"></textarea>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <input placeholder='Price' className='form-control' type="number" />
                    </div>
                    <div className="col-md-6">
                        <input className='form-control' type="file" />
                    </div>
                </div>
                <input value='Add Order' className='btn btn-outline-dark mt-2' type="submit" />
            </div>
        </div>
    );
};

export default Order;