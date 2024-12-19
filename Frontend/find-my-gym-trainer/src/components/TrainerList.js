import React, { useEffect, useState } from 'react'
import axios from 'axios';

const TrainerList = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/trainers`).then((response)=>{
            setData(response.data);
            
        })
    },[])


    return (
        <div className='m-5' style={{"border":"1px solid black","boxShadow":"1px 2px 3px"}}>
            <table className='table table-hover table-striped border'>
                <tr className='bg-success'>
                    <th>ID</th><th>Trainer Name</th><th>Email</th><th>phoneNumber</th><th>Specification</th><th>Fees</th>
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
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TrainerList
