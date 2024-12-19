import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const AllTrainers = () => {
    const nav=useNavigate();

    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchtrainer();
    },[])

    const fetchtrainer=()=>{
        axios.get(`http://localhost:8080/trainers`).then((response)=>{
            setData(response.data);
            
        })
     }
    //  console.log(data)

     const deleteRec=(id,name)=>{
        if(window.confirm(`Are you sure , you want to delete :${name} ?`)){
         axios.delete(`http://localhost:8080/trainer/delete/${id}`).then(()=>{
             window.alert("TRAINER DELETED SUCESSFULLY");
             fetchtrainer();
         }).catch((err)=>{});
        }
     }
    

    return (
        <div>
            {/* <div style={{"textAlign":"center","margin":"10px"}}>
                    <Button onClick={()=>{nav(-1)}}>Go Back</Button>
            </div> */}
            <div  className='m-5 p-2' style={{"border":"1px solid black","boxShadow":"1px 2px 3px"}}> 
            <table className='table table-hover table-striped '>
                <tr className='bg-warning'>
                    <th>ID</th><th>Trainer Name</th><th>Email</th><th>phoneNumber</th><th>Specification</th><th>Fees</th>
                    <th>Update</th><th>Delete</th>
                </tr>
                <tbody>
                    {data.map((val,index)=>{
                        return <tr key={index}> 
                            <td>{val.id}</td>
                            <td>{val.firstName} {val.lastName}</td>
                            <td>{val.email}</td>
                            <td>{val.phoneNumber}</td>
                            <td>{val.specification}</td>
                            <td>{val.charges}</td>
                            <td><Link to={`/editTrainer/${val.id}`} className='btn btn-outline-info'><i className="fa fa-pencil" aria-hidden="true" ></i></Link> </td>
                            <td><button type='button' className='btn btn-outline-danger' onClick={()=>{deleteRec(val.id,val.firstName)}}><i className="fa fa-minus-circle" aria-hidden="true"></i></button></td>
                        </tr>
                    })}
                </tbody>
            </table>

            </div>
            
        </div>
    )
}

export default AllTrainers
