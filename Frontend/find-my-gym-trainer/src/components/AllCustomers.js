import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllCustomers = () => {

    const [data,setdata]=useState([]);
    const nav=useNavigate();
    useEffect(()=>{

        fetchcustomer();

    },[])


    //get records
     const fetchcustomer=()=>{
        axios.get(`http://localhost:8080/customers`).then((response)=>{
            setdata(response.data);
        })
     }

     //DELETE RECORD
  
     const deleteRec=(id,name)=>{
        if(window.confirm(`Are you sure , you want to delete :${name} ?`)){
         axios.delete(`http://localhost:8080/customer/delete/${id}`).then(()=>{
             window.alert("customer DELETED SUCESSFULLY");
             fetchcustomer();
         }).catch((err)=>{});
        }
     }

    return (
        <div>
            
            <div  className='m-5 p-2' style={{"border":"1px solid black","boxShadow":"1px 2px 3px"}}>
            <table className='table table-hover table-striped'>
                <tr className='bg-success '>
                    <th>ID</th><th>Name</th><th>Email</th><th>phoneNumber</th><th>StartDate</th><th>EndDate</th><th>Fee Status</th>
                    <th>Package Name</th><th>Trainer Name</th><th>Update</th><th>Delete</th>
                </tr>
                <tbody>
                    {data.map((val,index)=>{
                        return <tr key={index}> 
                            <td>{val.id}</td>
                            <td>{val.fName} {val.lName}</td>
                            <td>{val.email}</td>
                            <td>{val.phNo}</td>
                            <td>{val.start_date}</td>
                            <td>{val.end_date}</td>
                            <td>{val.feeStatus}</td>
                            <td>{val.package_id.description}</td>
                            <td>{val.trainer_id.firstName} {val.trainer_id.lastName}</td>
                            <td><Link to={`/editCustomer/${val.id}`} className='btn btn-outline-info'><i className="fa fa-pencil" aria-hidden="true" ></i></Link> </td>
                            <td><button type='button' className='btn btn-outline-danger' onClick={()=>{deleteRec(val.id,val.fName)}}><i className="fa fa-minus-circle" aria-hidden="true"></i></button></td>
                        </tr>
                    })}
                </tbody>
            </table>




            </div>
                </div>
           );
}

export default AllCustomers
