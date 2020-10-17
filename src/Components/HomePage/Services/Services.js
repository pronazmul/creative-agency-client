import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Services = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        const url = 'http://localhost:5000/allServices'
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <div className="container-fluid">
            <div className="container">
                <h1 className='font-weight-bolder text-center'>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
                <div className="row">
                    {service.map(data =>
                        <div key={data._id} className="col-md-4 col-sm-12  my-5">
                            <Link className='text-decoration-none' to={`/dashboard/${data._id}`}>
                                <div className="card border-0 shadow zoom">
                                    <div className="card-body">
                                        <img src={`data:image/png;base64,${data.image.name}`} height='100' className='d-block mx-auto' alt="" />
                                        <h4 className='text-center my-3'>{data.title}</h4>
                                        <p className='text-secondary text-center'>{data.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;