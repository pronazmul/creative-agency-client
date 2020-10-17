import React, { useEffect, useState } from 'react'


const Feedback = () => {
    const [review, setReview] = useState([])

    useEffect(()=>{
        const url ='https://serene-beyond-95507.herokuapp.com/allReviews'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <h1 className='font-weight-bolder text-center'>Client's <span style={{color:'#7AB259'}}>Feedback</span></h1> 
                <div className="row">
                    {review.map(data=>
                       <div key={data.name} className="col-md-4 col-sm-12">
                           <div className="card my-5 border-0 shadow px-3 py-4">
                               <div className="card-body">
                                   <div className="row mb-4 d-flex flex-row align-items-center">
                                       <div className="col-md-4">
                                            <img src={`data:image/png;base64,${data.image.name}`} height='100' alt=""/>
                                       </div>
                                       <div className="col-md-8">
                                            <h4 className=' ml-3'>{data.name}</h4>
                                            <p className=' ml-3 text-secondary'>{data.company}</p>
                                       </div>
                                   </div>
                                   <p className='text-secondary text-center'>{data.review}</p>
                               </div>
                           </div>
                       </div> 
                    )}
                </div>               
            </div>
        </div>
    );
};

export default Feedback;