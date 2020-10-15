import React from 'react';
import googleImg from '../../../images/logos/google.png'
import netflixImg from '../../../images/logos/netflix.png'
import slackImg from '../../../images/logos/slack.png'
import uberImg from '../../../images/logos/uber.png'
import airbnbImg from '../../../images/logos/airbnb.png'

const TrustedByCompanies = () => {
    return (
        <div style={{marginBottom:'100px'}} className="container-fluid">
            <div className="container">
                <div className="row d-flex flex-row align-items-center justify-content-between">
                    <div className="col-md-2 col-sm-6">
                        <img src={googleImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={netflixImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={slackImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={uberImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <img src={airbnbImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedByCompanies;