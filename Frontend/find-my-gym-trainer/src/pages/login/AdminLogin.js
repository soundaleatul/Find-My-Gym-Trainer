import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AdminLogin = () => {
    const nav= useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  


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
        const onchangePassword=(e)=>{
          const password=e.target.value;
          const pslength = password.length
          console.log(pslength);
          if(password != null){
              setPassword(password);
          }
        }

        const onLogin=(e)=>{
          e.preventDefault();
          if(password==''||password<password.length||email==''){
            window.alert('please enter all fields');
          }
          let admin={
            email:email,
            password:password
          };

               
        
            console.log(admin);
            
            axios.get(`http://localhost:8080/admin/verify/${email}/${password}`,admin).then((response)=>{
              // console.log(response.data);

              if(response.data){
                window.alert(`welcome ${response.data.firstName}`);
              
                nav(`/admin/profile`,{state:{id:response.data.id}});
                // nav(`admin/profile/${response.data.id}`);
               
              }
              else{
                
                window.alert('please enter correct credentials...');
                document.getElementById('email').value='';
                document.getElementById('pswrd').value='';
              }
         
          }).catch((err)=>{window.alert('invalid user ..!!!')})
  
         
        
          }




  return (
    <div className='container mt-3 mb-3 p-5 ' style={{"width":"40%","border":"2px solid black","boxShadow":"1px 2px 3px"}}>
      <form>
      <div className="form-group text-center">
            <div className="col">
              <h1>Admin login</h1>
            </div>
      </div>

      <div className="form-group row-md-4">
            <label htmlFor="email">Email</label>
            <input
            id='email'
              className="form-control"
              type="email"
            //  value={email}
              placeholder="Enter Email"
              onChange={onchangeEmail}
            />
            <span id="emailmsg"></span>
          </div>
          <div className="form-group row-md-4">
            <label htmlFor="password">Password</label>
            <input
            id='pswrd'
              className="form-control"
              type="password"
              value={password}
              onChange={onchangePassword}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group col-md-4">
            <div className="col mt-4 mb-4">
              <button
                className="btn btn-success"
                type="button"
                onClick={onLogin}
              >
                Login
              </button>
            </div>
          </div>
      </form>
      
    </div>
  )
}

export default AdminLogin
