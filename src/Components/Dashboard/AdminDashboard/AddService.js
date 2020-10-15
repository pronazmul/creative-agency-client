import React from 'react';

const AddService = () => {
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="row">
                <div className="col-md-6">
                    <input className='form-control' placeholder='Enter Title' type="text" />
                    <textarea class="form-control mt-3" placeholder="Enter Description" rows="4"></textarea>
                </div>
                <div className="col-md-6">
                    <input placeholder='Upload Image' className='custom-control-input' type="file" />
                </div>
            </div>
            <button className='btn btn-outline-success mt-3'>Submit</button>
        </div>
    );
};

export default AddService;