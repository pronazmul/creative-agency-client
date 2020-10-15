import React from 'react';

const ServiceStatus = () => {
    return (
        <div style={{ borderRadius: '20px' }} className="container bg-light mt-3 p-5">
            <table className="table table-striped">
                <thead>
                    <tr className='row text-center'>
                        <th className="col-md-2">Name</th>
                        <th className="col-md-2">Email</th>
                        <th className="col-md-3">Serivce</th>
                        <th className="col-md-3">Project</th>
                        <th className="col-md-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row text-center'>
                        <td className="col-md-2">Nazmul</td>
                        <td className="col-md-2">nazmul@gmail.com</td>
                        <td className="col-md-3">Soft Develop</td>
                        <td className="col-md-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quibusdam.</td>
                        <td className="col-md-2">
                            <select className='form-control'>
                                <option selected>Pending</option>
                                <option value="Done">Done</option>
                                <option value="Ongoing">Ongoing</option>
                            </select>
                        </td>
                    </tr>

                    <tr className='row text-center'>
                        <td className="col-md-2">Sania</td>
                        <td className="col-md-2">sania@gmail.com</td>
                        <td className="col-md-3">Designer</td>
                        <td className="col-md-3">adipisicing elit. Deleniti, quibusdam.</td>
                        <td className="col-md-2">
                            <select className='form-control'>
                                <option selected>Pending</option>
                                <option value="Done">Done</option>
                                <option value="Ongoing">Ongoing</option>
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ServiceStatus;