import React, { useState } from 'react';

const AddService = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = (e) =>{
            let newData = {...info}
            newData[e.target.name]=e.target.value
            setInfo(newData)
    }
    const handleFile =(e) =>{
        const image = e.target.files[0]
        setFile(image)
    }
    const handleForm = (e) => {
        // Prevent AutoLoad
        e.preventDefault()

        let formData = new FormData()  
        formData.append('image',file)
        formData.append('title', info.title)
        formData.append('description', info.description)

        const url = 'http://localhost:5000/addService'
        
        fetch(url,{
            method:'POST',
            body: formData
        })

       }
    
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
        <form onSubmit={handleForm}>
            <div className="row">
                    <div className="col-md-6">
                        <input onBlur={handleBlur} name='title' className='form-control' placeholder='Enter Title' type="text" required />
                        <textarea  onBlur={handleBlur} name='description' className="form-control mt-3" placeholder="Enter Description" rows="4" required></textarea>
                    </div>
                    <div className="col-md-6">
                        <input onChange={handleFile} className='form-control' type="file" required/>
                    </div>
                    <input type='submit' value='Add New Service' className='ml-3 btn btn-outline-dark mt-3' />
            </div>
        </form>
        </div>
    );
};

export default AddService;