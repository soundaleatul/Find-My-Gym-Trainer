import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../../css/adminprofile.css'
import { Link } from 'react-router-dom';




const AdminProfile = () => {

    const location = useLocation();
    const nav=useNavigate();
    const id = location.state.id;
    const [data, setdata] = useState({});

    // const {id}=useParams();




useEffect(()=>{
    axios.get(`http://localhost:8080/admin/${id}`).then((response) => {
        setdata(response.data)
    })

},[])
    
    return (
        <div className="page-content page-container" id="page-content" >
            <div className="padding">
                <div className="row container d-flex justify-content-center" >
                    <div className="col-xl-6 col-md-12">
                        <div className="card user-card-full " style={{"width":"100%","border":"2px solid black","boxShadow":"3px 6px 3px"}}>
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25">
                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                        </div>
                                        <h6 className="f-w-600">{data.firstName + " " + data.lastname}</h6>
                                        <p>Admin</p>
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
                                    </div>

                                    <ul className='navbar-nav mb-4 mb-lg-0'>
                                        <li className="nav-item  dropdown">
                                            <a className="nav-link dropdown-toggle btn btn-primary" href="/signup" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Add Customer/Trainer
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className='dropdown-item' to='customer/signup'>Customer</Link>
                                                    {/* <button className='btn' onClick={()=>{nav(`customer/signup`,{state:{adminid:id}});}}>Customer</button> */}
                                                </li>
                                                <li>
                                                    <Link className='dropdown-item' to='trainer/signup'>Trainer</Link>
                                                </li>
                                                <li><hr className="dropdown-divider" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <Link  to='/allcustomers' className='btn btn-primary m-3'>Get All Customers</Link>
                                    <Link  to='/alltrainers' className='btn btn-secondary m-3'>Get All Trainer </Link>
                                    <Link  to='/allpackages' className='btn btn-warning m-3'>Get All package</Link>


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

export default AdminProfile
