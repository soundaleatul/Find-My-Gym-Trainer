import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const TrainerRegister = () => {
    const nav=useNavigate();

      const [firstname,setFirstname]=useState("");
      const [lastname,setLastname]=useState("");
      const [email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      const [specification,setSpecification]=useState('');
      const [charges,setCharges]=useState('');
      const [phoneNumber,setPhoneNumber]=useState('');

                        const onchangeFirstname=(e)=>{
                            const firstname=e.target.value;
                            setFirstname(firstname);
                        }
                        const onchangeLastname=(e)=>{
                            const lastname=e.target.value;
                            setLastname(lastname);
                        }
                        const onchangePassword=(e)=>{
                            const password=e.target.value;
                            const pslength = password.length
                            console.log(pslength);
                            if(password != null){
                                setPassword(password);
                            }
                        }
                        const onchangeEmail=(e)=>{
                            const email=e.target.value;
                            let a=document.getElementById('emailmsg');
                        if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){    ///^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
                            a.innerHTML="invalid email";
                        a.style.color="red";  
                            return false;
                        }
                        a.innerHTML="valid email";
                        a.style.color="green";
                        setEmail(e.target.value);
                        return true;     
                        }

                        const onchangeSpecification=(e)=>{
                            setSpecification(e.target.value);
                        }
                        const onchangeCharges=(e)=>{
                            setCharges(parseInt(e.target.value));
                        }
                        const onchangePhoneNumber=(e)=>{
                            const phoneNumber=e.target.value;
                            console.log(typeof(phoneNumber));
                            const  phonelength=phoneNumber.length
                            let a=document.getElementById('cno');
                            if(phonelength==10){
                              a.innerHTML="valid contact no.";
                              a.style.color="green";
                              setPhoneNumber(parseInt(phoneNumber));
                              return true;
                            }
                            a.innerHTML="invalid contact no";
                            a.style.color="red";
                            return false;
                          }

                          const onRegister=async(e)=>{
    
                            e.preventDefault();
                            if(firstname==''||lastname==''||password==''||password<password.length||phoneNumber==''||email==''||specification==''||charges==''){
                              window.alert('please enter all fields');
                            }
                            let trainer={
                              firstName:firstname,lastName:lastname,email:email,specification:specification,charges:charges,phoneNumber:phoneNumber,
                              password:password
                            };
                          
                            //   console.log(trainer);
                              
                              axios.post("http://localhost:8080/trainer/add",trainer).then(()=>{
                                window.alert("trainer added successfully")
                             nav(-1);
                            }).catch((err)=>{window.alert('trainer is not added..!!!!')})
                    
                           
                          
                            }













    return (
       
                 <div className="container mt-3 mb-3 p-5" style={{"margin-left":"500px","width":"40%","border":"2px solid black","boxShadow":"1px 2px 3px"}}>

                <form>
                <div className="form-group">
                        <div className="col">
                                 <h1>Trainer Registration</h1>
                        </div>
                 </div>
                 <div className="form-group row-md-4">
                        <label htmlFor="firstname">First Name</label>
                        <input
                        className="form-control "
                        type="text"
                        value={firstname}
                        placeholder="Enter first Name"
                        onChange={onchangeFirstname}
                        ></input>
                </div>

                <div className="form-group row-md-4">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                    className="form-control "
                    type="text"
                    value={lastname}
                    onChange={onchangeLastname}
                    placeholder="Enter Last Name"
                    ></input>
                </div>
                <div className="form-group row-md-4">
                    <label htmlFor="email">Email</label>
                    <input
                    className="form-control"
                    type="email"
                    //  value={email}
                    placeholder="Enter Email"
                    onChange={onchangeEmail}
                    />
                    <span id="emailmsg"></span>
                </div>

                <div className='form-group row-md-4'>
                    <label htmlFor='specification'>Specification</label>
                    <input className='form-control' type='text' placeholder='Enter Specification' onChange={onchangeSpecification}/>
                </div>
                <div className='form-group row-md-4'>
                    <label htmlFor='charges'>Charges</label>
                    <input className='form-control' type='number' placeholder='Enter Charges' onChange={onchangeCharges}/>
                </div>

                <div className='form-group row-md-4'>
                    <label htmlFor='phoneNumber'>PhoneNumber</label>
                    <input className='form-control' type='number' placeholder='Enter PhoneNumber' onChange={onchangePhoneNumber}/>
                    <span id="cno"></span>
                </div>
                <div className="form-group row-md-4">
                    <label htmlFor="password">Password</label>
                    <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={onchangePassword}
                    placeholder="Enter password"
                    />
                </div>

                <div className="form-group row-md-4 text-center m-2">
                        <div className="col">
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={onRegister}
                        >
                           Register
                        </button>
                </div>
          </div>
                
                </form>
            </div>
       
    )
}

export default TrainerRegister
