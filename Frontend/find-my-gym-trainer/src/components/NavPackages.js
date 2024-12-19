import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../images/crossfit.jpg'

const NavPackages = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchpackages();
    }, [])

    const fetchpackages = () => {
        axios.get(`http://localhost:8080/packages`).then((response) => {
            setData(response.data);

        }).catch((error) => {
            console.log(error);
            
        });
    }


    return (
        <div className='m-4 p-2 ' style={{"display":"flex","justifyContent":"space-between","flexWrap":"wrap"}} >
            {data.map((val, index) => {
                    return  <div key={val.id} className="card   mx-auto" style={{"width": "500px","border":"2px solid black","boxShadow":"1px 5px 5px"}}>
                    <div className="card-header bg-info"><strong>Package ID: {val.id}</strong></div>
                    <div className="card-body">
                        <p className="card-text text-black"><strong>Package Description:<span className='text-success'>{val.description}</span></strong></p>
                        <p className="card-title text-black"><strong>Package Charges: <span className='text-danger'>{val.fees}</span></strong></p>
                    </div>
                </div>

            })}
     </div>  
    )
}

export default NavPackages
