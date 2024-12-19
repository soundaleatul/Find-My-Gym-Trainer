      import React, { useEffect, useState } from "react";
      import axios from 'axios';
      import { useLocation, useNavigate } from 'react-router-dom';


      const CustomerRegister = () => {

        // const location = useLocation();
        // const id = location.state.adminid;
        const nav=useNavigate();
        
        const inputstyle = {
          color: "black",
          background: "transparent",
        };

        const [pkgdata, setpkgData] = useState([]);
        const [trainerdata,settrainerData]=useState([]);
        useEffect(() => {
            fetchpackages();
            fetchtrainer();

        }, [])

        const fetchpackages = () => {
            axios.get(`http://localhost:8080/packages`).then((response) => {
                setpkgData(response.data);

            }).catch((error) => {
                console.log(error);
            });
        }
          const fetchtrainer=()=>{
              axios.get(`http://localhost:8080/trainers`).then((response)=>{
                  settrainerData(response.data);    
              })
          }

            const [firstname,setFirstname]=useState("");
            const [lastname,setLastname]=useState("");
            const [password,setPassword]=useState("");
            const [contactno,setContactno]=useState('');
            const [email,setEmail]=useState("");
            const [startdate,setStartdate]=useState("");
            const [enddate,setEnddate]=useState("");
            const [pakageId,setPakageId]=useState('');
            const [trainerId,setTrainerId]=useState('');
            const [feeStatus,setFeeStatus]=useState("");


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
            const onchangeContactNo=(e)=>{
              const contactno=e.target.value;
              console.log(typeof(contactno));
              const  contactlength=contactno.length
              let a=document.getElementById('cno');
              if(contactlength==10){
                a.innerHTML="valid contact no.";
                a.style.color="green";
                setContactno(parseInt(contactno));
                return true;
              }
              a.innerHTML="invalid contact no";
              a.style.color="red";
              return false;
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
            const onchangeStartDate=(e)=>{
              const date=e.target.value;
              setStartdate(date);
            }
            const onchangeendDate=(e)=>{
              const date=e.target.value;
              setEnddate(date);
            }
            const onchangePakageId=(e)=>{
              const pkgid=parseInt(e.target.value);
              setPakageId(pkgid);
            }
            const onchangeTrainerId=(e)=>{
              const trainerid=parseInt(e.target.value);
              setTrainerId(trainerid);
            }

            const onchangeFeestatus=(e)=>{
              const selectedvalue=e.target.value;
              setFeeStatus(selectedvalue);
            }

            const onRegister=async(e)=>{
          
              e.preventDefault();
              if(firstname==''||lastname==''||password==''||password<password.length||contactno==''||email==''||startdate==''||enddate==''||pakageId==''||trainerId==''||feeStatus==''){
                window.alert('please enter all fields');
              }
              let customer={
                fName:firstname,lName:lastname,phNo:contactno,email:email,
                password:password,start_date:startdate,end_date:enddate,package_id:pakageId,trainer_id:trainerId,feeStatus:feeStatus
              };
            
                console.log(customer);
                
                axios.post("http://localhost:8080/customer/add",customer).then(()=>{
                  window.alert("customer added successfully")
                  nav(-1);
              }).catch((err)=>{window.alert('customer is not added..!!!!')})

            
            
              }








        return (
          
          <div className="container mt-3 mb-3 p-5" style={{"margin-left":"500px","width":"40%","border":"2px solid black","boxShadow":"1px 2px 3px"}}>

              <form>
                <div className="form-group">
                  <div className="col">
                    <h1>Customer Registration</h1>
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
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={onchangePassword}
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group row-md-4">
                  <label htmlFor="contact">ContactNo</label>
                  <input
                  
                    className="form-control"
                    type="number"
                  // value={contactno}
                    onChange={onchangeContactNo}
                    placeholder="Enter ContactNo"
                  />
                  <span id="cno"></span>
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
                <div className="form-group row-md-4">
                  <label htmlFor="joindate">Start Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={startdate}
                    onChange={onchangeStartDate}
                    placeholder="Enter StartDate"
                  />
                </div>
                <div className="form-group row-md-4">
                  <label htmlFor="joindate">End Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={enddate}
                    readOnly
                    onChange={onchangeendDate}
                    placeholder="Enter EndDate"
                  />
                </div>

                <div className="form-group row-md-4">
                  <label htmlFor="pkgid">PakageId</label>
                  {/* <input
                    className="form-control"
                    type="number"
                  // value={pakageId}
                    onChange={onchangePakageId}
                    placeholder="Enter Package Number"
                  /> */}

                <select className="form-control "  style={inputstyle}
                    type="text" value={pakageId}  onChange={onchangePakageId}>
                    <option selected value="">Select</option>
                  {pkgdata.map((item)=>{

                                  return(<option value={item.id}>{item.description}</option>);
                  })}
                  </select>
                </div>
                <div className="form-group row-md-4">
                  <label htmlFor="trainerid">Select Trainer</label>
                  {/* <input
                    className="form-control"
                    type="number"
                  // value={trainerId}
                    onChange={onchangeTrainerId}
                    placeholder="Enter Trainer Number"
                  /> */}

                  <select className="form-control "  style={inputstyle}
                    type="text" value={trainerId} onChange={onchangeTrainerId}>
                    <option selected value="">Select</option>
                  {trainerdata.map((item)=>{

                                  return(<option value={item.id}>{item.firstName} {item.lastName}</option>);
                  })}
                  </select>

                </div>

                <div className="form-group row-md-4">
                  <label htmlFor="FeeStatus">FeeStatus</label>
                  <select
                    id="feeStatus"
                    style={inputstyle}
                    type="text"
                  value={feeStatus}
                    onChange={onchangeFeestatus}
                    className="form-control "
                  >
                    <option  selected value="">Select</option>
                    <option  value="unPaid">unPaid</option> 
                    <option value="Paid">Paid</option>
                    
                  </select>
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
        );
      };

      export default CustomerRegister;
