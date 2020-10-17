import React, { useEffect, useState } from 'react';

const ServiceStatus = () => {
const [serviceData, setServiceData] = useState([])

useEffect(() => {
    const url = 'http://localhost:5000/allOrder'
    fetch(url)
        .then(res => res.json())
        .then(data => setServiceData(data))
}, [])
const handleChange =(id)=>{
    const status = document.getElementById('status').value
    fetch(`http://localhost:5000/updateStatus/${id}`,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({updatedStatus:status})
       })
       .then(res=> res.json())
       .then(data=>alert('Status Updated'))
}

    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <table className="table table-striped">
                <thead>
                    <tr className='row text-center'>
                        <th className="col-md-3">Image</th>
                        <th className="col-md-2">Name</th>
                        <th className="col-md-2">Email</th>
                        <th className="col-md-3">Serivce</th>
                        <th className="col-md-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                {serviceData.map(data=>
                    <tr key={data._id} className='row text-center'>
                        <td className="col-md-2"><img height='30' src={`data:image/png;base64,${data.image.name}`} alt=""/></td>
                        <td className="col-md-2">{data.name}</td>
                        <td className="col-md-3">{data.email}</td>
                        <td className="col-md-3">{data.title}</td>
                        <td className="col-md-2">
                            <select onChange={()=>handleChange(data._id,)} id='status'className='form-control'>
                                <option defaultValue>{data.status}</option>
                                <option value="done">done</option>
                                <option value="pending">pending</option>
                            </select>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceStatus;