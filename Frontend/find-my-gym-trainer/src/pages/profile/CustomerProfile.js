import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../components/Navbar';
import '../../css/adminprofile.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';




const CustomerProfile = (props) => {
    const nav=useNavigate();
    const location = useLocation();
    const id = location.state.id;
    // const {id}=useParams();
    const [pkg,setpkg]=useState([]);
    const [data, setdata] = useState({});
    const [trainer,settrainer]=useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/customer/${id}`).then((response) => {
            setdata(response.data)
            setpkg(response.data.package_id)
            settrainer(response.data.trainer_id)
        })
    }, [])

    const trainerclickhandler=()=>{
        nav(`trainerfeedback`,{state:{customer:data,trainer:trainer}});
    }
    const packagefeedbackclickhandler=()=>{
        nav(`packagefeedback`,{state:{customer:data,package:pkg}});
    }

    console.log(data);

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
                                        <h6 className="f-w-600">{data.fName + " " + data.lName}</h6>
                                        <p>Customer</p>
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
                                                <h6 className="text-muted f-w-400">{data.phNo}</h6>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Joining Date</p>
                                                <h6 className="text-muted f-w-400">{data.start_date}</h6>
                                                <p className="m-b-10 f-w-600">End Date</p>
                                                <h6 className="text-muted f-w-400">{data.end_date}</h6>

                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Package Description</p>
                                                <h6 className="text-muted f-w-400">Package_id: {pkg.id}</h6>
                                                <h6 className="text-muted f-w-400">Package_Fees: {pkg.fees}</h6>
                                                <h6 className="text-muted f-w-400">Package_description: {pkg.description}</h6>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Trainer Info</p>
                                                <h6 className="text-muted f-w-400">Trainer Name: {trainer.firstName + " " + trainer.lastName}</h6>
                                                <h6 className='text-muted f-w-400'>Specification: {trainer.specification}</h6>
                                                <h6 className='text-muted f-w-400'>Charges: {trainer.charges}</h6>
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

export default CustomerProfile
