import React from 'react'
import mobile from '../../../images/customer-1.png'
import graphic from '../../../images/customer-2.png'
import web from '../../../images/customer-3.png'


const Feedback = () => {
    const feedBack = [
        {
            img:mobile,
            name: "Nash Pratik",
            title: "CEO, Manpal",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis architecto accusantium delectus inventore facere provident neque in officiis numquam?"
        },
        {
            img:graphic,
            name: "AB DE",
            title: "Mr 360 Deg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis architecto accusantium delectus inventore facere provident neque in officiis numquam?"
        },
        {
            img:web,
            name: "MS Dhoni",
            title: "Rocket Kipper",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis architecto accusantium delectus inventore facere provident neque in officiis numquam?"
        }
    ]
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <h1 className='font-weight-bolder text-center'>Client's <span style={{color:'#7AB259'}}>Feedback</span></h1> 
                <div className="row">
                    {feedBack.map(data=>
                       <div key={data.name} className="col-md-4 col-sm-12">
                           <div className="card my-5 border-0 shadow px-3 py-4">
                               <div className="card-body">
                                   <div className="row mb-4 d-flex flex-row align-items-center">
                                       <div className="col-md-4">
                                            <img src={data.img} height='100' alt=""/>
                                       </div>
                                       <div className="col-md-8">
                                            <h4 className=' ml-3'>{data.name}</h4>
                                            <p className=' ml-3 text-secondary'>{data.name}</p>
                                       </div>
                                   </div>
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

export default Feedback;