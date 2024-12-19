import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditTrainer = () => {

    const nav=useNavigate();
    const {id}=useParams();
    const [item,setItem]=useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        specification:'',
        charges:''
});
useEffect(()=>{
    axios.get(`http://localhost:8080/trainer/${id}`).then((res)=>{
        setItem(res.data);
    }).catch((Err)=>{})
},[])

    const inputChangeHandler =(event)=>{
        const{type,name,value}=event.target;
        setItem({...item,[name]:value})
    }

    const edittrainer = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8080/trainer/update/${id}`,item).then(()=>{
            window.alert("Trainer updated successfully");
            nav(-1)
        }).catch((err)=>{})
    }


    return (
        <div className="container mt-3 mb-3 p-5" style={{"margin-left":"500px","width":"40%","border":"2px solid black","boxShadow":"1px 2px 3px"}}>

            <h2>This is Edit Trainer</h2>
            <form onSubmit={edittrainer}>
                 <div className='form-group'>
                     <label className='form-label'>Update Trainer First Name:</label>
                    <input type='text' name='firstName' className='form-control' onChange={inputChangeHandler} value={item.firstName}></input>
                 </div>
                 <div className='form-group'>
                     <label className='form-label'>Update Trainer Last Name:</label>
                    <input type='text' name='lastName' className='form-control' onChange={inputChangeHandler} value={item.lastName}></input>
                 </div>
                <div className='form-group'>
                     <label className='form-label'>Update Trainer Email:</label>
                    <input type='email' name='email' className='form-control' onChange={inputChangeHandler}  value={item.email}></input>
                 </div>
                
                <div className='form-group'>
                    <label className='form-label'>Update Phone Number:</label>
                    <input type='text' name='phoneNumber' className='form-control' onChange={inputChangeHandler} value={item.phoneNumber}></input>    
                </div>
                <div className='form-group'>
                    <label className='form-label'>Update Specification :</label>
                    <input type='text' name='specification' className='form-control' onChange={inputChangeHandler} value={item.specification}></input>    
                </div>
                <div className='form-group'>
                    <label className='form-label'>Update Charges:</label>
                    <input type='number' name='charges' className='form-control' onChange={inputChangeHandler} value={item.charges}></input>    
                </div>
                
                <div>
            <       button type='submit' className='btn btn-success mt-3'>UPDATE</button>
                </div>
             </form>
        </div>
        

    )
}

export default EditTrainer
