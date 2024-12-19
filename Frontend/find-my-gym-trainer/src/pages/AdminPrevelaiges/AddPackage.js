import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPackage = () => {
    const nav=useNavigate();
        const[item,setItem]=useState({
            description:"",
            fees:""
        })

    const inputChangeHandler=(event)=>{
        const {type,name,value}=event.target;
        setItem({...item,[name]:value})
    }
    const addPackage=(event)=>{
        event.preventDefault();
        // console.log(item);
        axios.post("http://localhost:8080/package/add",item).then(()=>{
            window.alert("Package added successfully");
            nav(-1);
        }).catch((err)=>{});
    }
    return (
        <div className="container mt-3 mb-3 p-5" style={{"margin-left":"500px","width":"40%","border":"2px solid black","boxShadow":"1px 2px 3px"}}>
            <h2>Please add new Package information here</h2>
            <form onSubmit={addPackage}>
                <div className='form-group'>
                    <label className='form-label'>Enter Package Description:</label>
                    <input type='text' name='description' className='form-control' onChange={inputChangeHandler}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Enter Package Charges:</label>
                    <input type='number' name='fees' className='form-control' onChange={inputChangeHandler}></input>
                </div>
                <div>
                    <button type='submit' className='btn btn-success mt-3'>ADD</button>
                </div>
                
                
            </form>
        </div>
    )
}

export default AddPackage
