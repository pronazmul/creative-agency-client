import React, { useState } from 'react'

const Reviews = () => {

    const [review, setReview] = useState({})
    const [file, setFile] = useState(null)  

const handleBlur =(e)=>{
    let newData = {...review}
    newData[e.target.name]=e.target.value
    setReview(newData)

}
const handleFile =(e) =>{
    const image = e.target.files[0]
    setFile(image)
}
const handleSubmit = (e) => {
    e.preventDefault()

        let formData = new FormData()  
        formData.append('image',file)
        formData.append('name', review.name)
        formData.append('company', review.company)
        formData.append('review', review.review)

        const url = 'http://localhost:5000/addReview'
        
        fetch(url,{
            method:'POST',
            body: formData
        }).then(res=> res.json())
        .then(data=> {
            alert('Review added Successfully')
            })
        e.target.reset() 
}
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <form onSubmit={handleSubmit}>
            <div className="col-md-8 mx-auto py-5">
                <div className="form-group">
                    <input onBlur={handleBlur} name='name' placeholder='Your Name' className='form-control mb-1' type="text" required/>
                    <input onBlur={handleBlur} name='company' placeholder='Company Name' className='form-control mb-1' type="text" required />
                    <textarea onBlur={handleBlur} name='review' placeholder='Details Here' className='form-control mb-1' rows="2" required></textarea>
                    <input onChange={handleFile} className='form-control' type="file" required/>
                </div>
                <input className='btn btn-outline-dark mt-2' type="submit" />
            </div>
            </form>
        </div>
    );
};

export default Reviews;