import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  
  return (
    <nav className="navbar navbar-expand-lg   bg-body-secondary "  data-bs-theme="dark">
          <div className="container-fluid">
            <Link className='navbar-brand'to='/'><FontAwesomeIcon icon={faDumbbell}/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">   
                        <Link className='nav-link active' to='/'>Home</Link>
                      </li>
                     
                      <li className='nav-item'>
                        <Link className='nav-link active' to='/navtrainer'>Trainers</Link>
                      </li>
                      <li>
                        <Link className='nav-link active' to='/navpackages'>Packages</Link>
                      </li>
                      <li>
                        <Link className='nav-link active' to='/bmicalculator'>BMI Calculator</Link>
                      </li>
                      <li className="nav-item">
                        <Link className='nav-link active' to='/AboutUs'>AboutUs</Link>
                      </li>
                    </ul>

                    <ul className="navbar-nav  mb-2  mb-lg-0 m-3">
                        <li className="nav-item  dropdown">
                            <a className="nav-link dropdown-toggle btn btn-primary" href="/login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Login
                            </a>
                            <ul className="dropdown-menu ">
                              <li>
                                    {/* <a className="dropdown-item" href="/Admin">Admin</a> */}
                                    <Link className='dropdown-item' to='/Admin'>Admin</Link>
                              </li>
                              <li>
                                {/* <a className="dropdown-item" href="/Customer">Customer</a> */}
                                <Link className='dropdown-item' to='/customer'>Customer</Link>
                              </li>
                              <li>
                                {/* <a className="dropdown-item" href="/Customer">Customer</a> */}
                                <Link className='dropdown-item' to='/trainer'>Trainer</Link>
                              </li>
                              <li><hr className="dropdown-divider"/></li>
                            </ul>
                          </li>
                          {/* <Link className='nav-link btn btn-success' to='/signup'>Signup</Link> */}
                    </ul>
                  </div>

          </div>
        </nav>
  )
}

export default Navbar
