import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const AllPackages = () => {
    const nav=useNavigate();
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchpackages();
    },[])

    const fetchpackages=()=>{
        axios.get(`http://localhost:8080/packages`).then((response)=>{
            setData(response.data);
            
        })
     }
     console.log(data)

     const deleteRec=(id)=>{
        if(window.confirm(`Are you sure , you want to delete :${id} ?`)){
         axios.delete(`http://localhost:8080/package/delete/${id}`).then(()=>{
             window.alert("PACKAGE DELETED SUCESSFULLY");
             fetchpackages();
         }).catch((err)=>{});
        }
     }
    

    return (
        <div style={{"border":"2px solid black","boxShadow":"1px 2px 3px"}}>
            {/* <div style={{"textAlign":"center","margin":"10px"}}>
            <Button onClick={()=>{nav(-1)}}>Go Back</Button>
            </div> */}
            <div  className='m-5 p-2' style={{"border":"1px solid black","boxShadow":"1px 2px 3px"}}>
            <table className='table table-hover table-striped'>
                <tr className='bg-success'>
                    <th>ID</th><th>Package Description</th><th>Package Charges</th>
                    <th>Update</th><th>Delete</th>
                </tr>
                <tbody>
                    {data.map((val,index)=>{
                        return <tr key={index}> 
                            <td>{val.id}</td>
                            <td>{val.description}</td>
                            <td>{val.fees}</td>
                            <td><Link to={`/editPackage/${val.id}`} className='btn btn-outline-info'><i className="fa fa-pencil" aria-hidden="true" ></i></Link> </td>
                            <td><button type='button' className='btn btn-outline-danger' onClick={()=>{deleteRec(val.id)}}><i className="fa fa-minus-circle" aria-hidden="true"></i></button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <diV className='mx-auto m-2' style={{"width": "200px"}}>
            <Link to='/allpackages/addpackage' className='btn btn-outline-success'>Add Package</Link>
            </diV>

        </div>
            
            
        </div>
    )
}

export default AllPackages
