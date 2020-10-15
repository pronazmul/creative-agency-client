import React from 'react';

const FooterForm = () => {
    return (
        <div className="container h-100">
            <div className="row mb-5">
                <div className="col-md-6 col-sm-12">
                    <h1>Let us handle your <br/> project, professionally.</h1>
                    <p className='text-secondery w-75 mt-4'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <input className='form-control mb-4' placeholder='Your Email' type="text"/>
                    <input className='form-control mb-4' placeholder='Company Name/Organization' type="text"/>
                    <textarea class="form-control" placeholder="Your Message Here" rows="4"></textarea>
                    <button className='btn btn-dark text-light px-5 mt-4'>SEND</button>
                </div>
            </div>
            <p className='text-center text-secondary small copyrightSpace'>copyright Orange labs 2020</p>      
        </div>
    );
};

export default FooterForm;