import React from 'react'
import mobile from '../../../images/icons/service1.png'
import graphic from '../../../images/icons/service2.png'
import web from '../../../images/icons/service3.png'


const Services = () => {
    const serviceData = [
        {
            img:mobile,
            name: "Web & Mobile design",
            desc: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product."
        },
        {
            img:graphic,
            name: "Graphic design",
            desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out."
        },
        {
            img:web,
            name: "Web development",
            desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general."
        }
    ]
    return (
        <div className="container-fluid">
            <div className="container">
                <h1 className='font-weight-bolder text-center'>Provide awesome <span style={{color:'#7AB259'}}>services</span></h1> 
                <div className="row">
                    {serviceData.map(data=>
                       <div key={data.name} className="col-md-4 col-sm-12">
                           <div className="card my-5 border-0 shadow">
                               <div className="card-body">
                                   <img src={data.img} height='100' className='d-block mx-auto' alt=""/>
                                   <h4 className='text-center my-3'>{data.name}</h4>
                                   <p className='text-secondary text-center'>{data.desc}</p>
                               </div>
                           </div>
                       </div> 
                    )}
                </div>               
            </div>
        </div>
    );
};

export default Services;