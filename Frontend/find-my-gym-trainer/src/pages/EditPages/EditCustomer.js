import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditCustomer = () => {

    const inputstyle = {
        color: "black",
        background: "transparent",
      };
    const nav=useNavigate();
    const {id}=useParams();
    
    const [item,setItem]=useState({
        fName:'',
        lName:'',
        email:'',
        phNo:'',
        package_id:'',
        start_date:'',
        end_date:'',
        feeStatus:'',
        trainer_id:'',
        password:''
});
const [pkgdata, setpkgData] = useState([]);
const [trainerdata,settrainerData]=useState([]);

useEffect(()=>{
   getallcustomer();
   fetchpackages();
   fetchtrainer();
},[])
const fetchtrainer=()=>{
    axios.get(`http://localhost:8080/trainers`).then((response)=>{
        settrainerData(response.data);    
    })
}

const fetchpackages = () => {
    axios.get(`http://localhost:8080/packages`).then((response) => {
        setpkgData(response.data);

    }).catch((error) => {
        console.log(error);
    });
}

    const getallcustomer=()=>{
        axios.get(`http://localhost:8080/customer/${id}`).then((res)=>{
            setItem(res.data);
        }).catch((Err)=>{})
    }

    const inputChangeHandler =(event)=>{
        const{type,name,value}=event.target;
        setItem({...item,[event.target.name]:event.target.value})
    }

    const editCustomer = (event)=>{
        event.preventDefault();
        axios.put(`http://localhost:8080/customer/update/${id}`,item).then(()=>{
            window.alert("Customer updated successfully");
            nav("/allcustomers")
        }).catch((err)=>{})
    }


    

    return (
       
        <div className="container mt-3 mb-3 p-5" style={{"margin-left":"500px","width":"40%","border":"2px solid black","boxShadow":"1px 2px 3px"}}>

            <h2> Edit Customer Details</h2>
            <form onSubmit={editCustomer}>
                 <div className='form-group'>
                     <label className='form-label'>Update Customer First Name:</label>
                    <input type='text' name='fname' className='form-control' onChange={inputChangeHandler} value={item.fName}></input>
                 </div>
                 <div className='form-group'>
                     <label className='form-label'>Update Customer Last Name:</label>
                    <input type='text' name='lname' className='form-control' onChange={inputChangeHandler} value={item.lName}></input>
                 </div>
                <div className='form-group'>
                     <label className='form-label'>Update Customer Email:</label>
                    <input type='email' name='email' className='form-control' onChange={inputChangeHandler}  value={item.email}></input>
                 </div>
                
                <div className='form-group'>
                    <label className='form-label'>Update Phone Number:</label>
                    <input type='text' name='phNo' className='form-control' onChange={inputChangeHandler} value={item.phNo}></input>    
                </div>
                <div className='form-group'>
                    <label className='form-label'>Update Start Date:</label>
                    <input type='date' name='start_date' className='form-control' onChange={inputChangeHandler} value={item.start_date}></input>    
                </div>
                <div className='form-group'>
                    <label className='form-label'>Update End Date:</label>
                    <input type='date' name='end_date' className='form-control' onChange={inputChangeHandler} value={item.end_date}></input>    
                </div>

                    <div className='form-group'>
                    <label className='form-label'>Update Fees Status: </label>
                    <select
                        name='feeStatus'
                        className='form-control'
                        onChange={inputChangeHandler}
                        value={item.feeStatus}
                    >
                        {/* <option value="">Select</option> */}
                        <option value="unPaid">unPaid</option>
                        <option value="Paid">Paid</option>
                    </select>
                </div>
                    <div className='form-group'>
                    <label className='form-label'>Update Package :</label>
                    {/* <input type='text' name='package_id' className='form-control' onChange={inputChangeHandler} value={item.package_id.id}></input>     */}
                    <select className="form-control " name='package_id' style={inputstyle}
                    type="text" value={item.package_id.id}  onChange={inputChangeHandler}>
                    <option selected value="">Select</option>
                  {pkgdata.map((val)=>{

                                  return <option className="form-control"  value={val.id}>{val.description}</option>;
                  })}
                  </select>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Update Trainer:</label>
                    {/* <input type='text' name='trainer_id' className='form-control' onChange={inputChangeHandler} value={item.trainer_id.id}></input>     */}
                    <select className="form-control "  style={inputstyle}
                    type="text" value={item.trainer_id.id} onChange={inputChangeHandler}>
                    <option selected value="">Select</option>
                     {trainerdata.map((val)=>{

                                  return(<option className="form-control"  value={val.id}>{val.firstName} {val.lastName}</option>);
                  })}
                  </select>
                </div>
                <div className='form-group'>
                    <label className='form-label'>Update Password:</label>
                    <input type='text' name='password' className='form-control' onChange={inputChangeHandler} value={item.password}></input>    
                </div>
                <div>
            <       button type='submit' className='btn btn-success mt-3'>UPDATE</button>
                </div>
             </form>
        </div>
     
    )
}

export default EditCustomer
