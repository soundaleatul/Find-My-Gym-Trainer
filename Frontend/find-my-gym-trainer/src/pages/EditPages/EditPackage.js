import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditPackage = () => {
    
    const nav=useNavigate();
    const {id}=useParams();
    const [item,setItem]=useState({
        description:'',
        fees:''
});
useEffect(()=>{
    axios.get(`http://localhost:8080/package/${id}`).then((res)=>{
        setItem(res.data);
    }).catch((Err)=>{})
},[])

    const inputChangeHandler =(event)=>{
        const{type,name,value}=event.target;
        setItem({...item,[name]:value})
    }

    const addpackage = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8080/package/update/${id}`,item).then(()=>{
            window.alert("Package updated successfully");
            nav(-1)
        }).catch((err)=>{})
    }


    return (
        <div className="container mt-3 mb-3 p-5" style={{"margin-left":"500px","width":"40%","border":"2px solid black","boxShadow":"1px 2px 3px"}}>

            <h2>This is Edit Package</h2>
            <form onSubmit={addpackage}>
                 <div className='form-group'>
                     <label className='form-label'>Update Package Description:</label>
                    <input type='text' name='description' className='form-control' onChange={inputChangeHandler} value={item.description}></input>
                 </div>
                 <div className='form-group'>
                     <label className='form-label'>Update Package Charges:</label>
                    <input type='text' name='fees' className='form-control' onChange={inputChangeHandler} value={item.fees}></input>
                 </div>
                <div className='mx-auto' style={{"width": "200px"}}>
                   <button type='submit' className='btn btn-success mt-3'>UPDATE</button>
                </div>
             </form>
        </div>
    )
}

export default EditPackage
