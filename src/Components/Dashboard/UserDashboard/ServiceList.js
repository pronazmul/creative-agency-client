import React from 'react'
import lmage1 from '../../../images/icons/service1.png'
import lmage2 from '../../../images/icons/service2.png'

const ServiceList = () => {
    const serviceData = [
        {
            image:lmage1,
            status:'Pending',
            title:'Mobile & Web Design',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta quo ipsa modi dolore accusamus."
        },
        {
            image:lmage2,
            status:'Done',
            title:'Graphic Design',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dicta quo ipsa modi dolore accusamus."
        }
    ]
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="row p-4">
                {serviceData.map(data=>
                    <div key={data.title} className="col-md-6">
                        <div style={{ borderRadius: '20px' }} className="card px-3 py-3 px-3">
                            <div className="card-body">
                                <div className="row d-flex flex-row justify-content-between align-items-center mb-4">
                                    <img height='70' src={data.image} alt=""/>
                                    {data.status==='Pending'?
                                    <p className=' text-danger'>{data.status}</p>
                                    :
                                    <p className=' text-success'>{data.status}</p>                                    
                                }
                                </div>
                                <h4 className='text-center'>{data.title}</h4>
                                <p className='text-secondary small'>{data.description}</p>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default ServiceList;