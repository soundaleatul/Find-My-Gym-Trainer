import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';


const TrainerProfile = () => {

    const location = useLocation();
    const id = location.state.id;
    // const id=useParams();
    const [data, setdata] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/trainer/${id}`).then((response) => {
        //    console.log(response.data)
           setdata(response.data)
        })
    }, [])





    return (
       <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full" style={{"width":"150%","border":"2px solid black","boxShadow":"3px 6px 3px"}}>
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25">
                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                        </div>
                                        <h6 className="f-w-600">{data.firstName + " " + data.lastName}</h6>
                                        <p>Trainer</p>
                                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="card-block">
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400">{data.email}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Phone</p>
                                                <h6 className="text-muted f-w-400">{data.phoneNumber}</h6>
                                            </div>
                                        </div>
                                        
                                        <div className='row'>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Trainer Info</p>
                                                <h6 className='text-muted f-w-400'>Specification: {data.specification}</h6>
                                                <h6 className='text-muted f-w-400'>Charges: {data.charges}</h6>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            
                            <Link className='btn btn-success m-2' to='/'>LogOut</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TrainerProfile
