import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { key } = useParams()
    const [selectedOrder, setSelectedOrder] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/selectedService/${key}`)
            .then(res => res.json())
            .then(data => setSelectedOrder(data))
    }, [key])

const [order, setOrder] = useState({})
const handleBlur =(e)=>{
    let newOrder = {...order, ...selectedOrder}
    newOrder[e.target.name] = e.target.value
    setOrder(newOrder)
}

const handleForm =(e)=>{
    e.preventDefault()

    const url = 'http://localhost:5000/addOrder'
        
        fetch(url,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},          
            body: JSON.stringify(order)

        }).then(res=> res.json())
        .then(data=> {
            alert('Service added Successfully')
            })
        e.target.reset()
}

    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <div className="col-md-8 mx-auto py-5">
                <form onSubmit={handleForm}>
                    <div className="form-group ">
                        <input onBlur={handleBlur} name='name' placeholder='Your Name/Company Name' className='form-control mb-1' type="text" disabled={!key} required/>
                        <input onBlur={handleBlur} name='email' placeholder='Your Email Address' className='form-control mb-1' type="email" disabled={!key} required/>
                        <input onBlur={handleBlur} name='service' placeholder='Required Service Name' value={selectedOrder.title} className='form-control mb-1' type="text" disabled={!key} required/>
                        <textarea onBlur={handleBlur} name='description' placeholder='Your Project Details' value={selectedOrder.description} className='form-control' rows="2" disabled={!key} required></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <input onBlur={handleBlur} name='price' placeholder='Price' className='form-control' type="number" disabled={!key}  required/>
                        </div>
                        <div className="col-md-6">
                            <input className='form-control' type="file" disabled={!key} />
                        </div>
                    </div>
                    <input value='Add Order' className='btn btn-outline-dark mt-2' type="submit" disabled={!key} />
                </form>
            </div>
        </div>
    );
};

export default Order;