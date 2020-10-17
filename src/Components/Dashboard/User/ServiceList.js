import React, { useContext, useEffect, useState } from 'react'
import { userContex } from '../../Main/Main';

const ServiceList = () => {
    const [serviceData, setServiceData] = useState([])
        const [loggedInUser, setLoggedInUser] = useContext(userContex)

    useEffect(() => { 

        fetch('https://serene-beyond-95507.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setServiceData(data))

    }, [])

    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="row p-4">
                {serviceData.map(data=>
                    <div key={data.title} className="col-md-6">
                        <div style={{ borderRadius: '20px' }} className="card px-3 py-3 my-3">
                            <div className="card-body">
                                <div className="row d-flex flex-row justify-content-between align-items-center mb-4">
                                    <img height='70' src={`data:image/png;base64,${data.image.name}`} alt=""/>
                                    {data.status==='pending'?
                                    <p className=' border border-danger rounded text-danger p-2'>{data.status}</p>
                                    :
                                    <p className=' border border-success text-success'>{data.status}</p>                                    
                                }
                                </div>
                                <h4 className='text-center'>{data.title}</h4>
                                <p className='text-secondary text-center small'>{data.description}</p>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default ServiceList;