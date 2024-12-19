import React from 'react'

import data from '../images/ConstantData'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
      <div className="card" style={{"border":"2px solid black","boxShadow":"1px 2px 3px"}}>
          <div className="card-header p-2 ">
           <h2 className='text-center fs-1 text-dark '>Gallery</h2> 
          </div> 
          <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={data.trainer1} class="d-block w-100" alt="broken" />
          </div>
          <div className="carousel-item">
            <img src={data.trainer2} class="d-block w-100" alt="broken" />
            <div className="carousel-caption d-none d-md-block bg-primary rounded">
                                <h1>Open 7 Days A Week</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={data.safe} class="d-block w-100" alt="broken" />
          </div>
          <div className="carousel-item">
            <img src={data.crossfit} class="d-block w-100" alt="broken" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
          {/* <div id="carouselExampleCaptions" className="carousel slide  ">
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src={data.trainer1} className="d-block w-100" alt="..."/>
                              <div className="carousel-caption d-none d-md-block">
                                <h1><span style={{"color":"orange"}}>CERTIFIED PERSONAL Trainer</span></h1>
                                <p>Some representative placeholder content for the first slide.</p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src={data.trainer2}className="d-block w-100" alt="..."/>
                              <div className="carousel-caption d-none d-md-block bg-primary rounded">
                                <h1>Open 7 Days A Week</h1>
                                <p>Some representative placeholder content for the second slide.</p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img src={data.safe} className="d-block w-100" alt="..."/>
                              <div className="carousel-caption d-none d-md-block">
                                <h5>Safe and Clean Environment</h5> 
                                 <p>Some representative placeholder content for the third slide.</p>
                              </div>
                            </div>
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div> */}
          <ul className="list-group list-group-flush text-center">
            <li className="list-group-item  p-5 ">
              <h5>The primary aim of this application is to connect customers with the correct gym trainer in our gym based on their workout requirement. Most of the people who attend the gym on daily basis are not aware of the workout their body needs and also the gym trainers which specializes in different fields give their opinion according to their knowledge without studying the physique of customers. This project eliminates the that issue and helps the customers to find their appropriate gym trainer.</h5>
            </li>
            <li className='list-group-item text-black '>
                 
                      <span className='text-light fs-5 bg-success p-2 rounded'>Operating Hours :</span>
                       <span className='fs-5'> Monday to Saturday: 6:00 am to 12:00 am & </span>
                       <span className='fs-5'>Sunday: 6:00 am to 10:00 pm</span>
                    
                       
            </li>
            <li className="list-group-item m-2">
              <p className='fs-5'>For further Information kindly Contact us at: <b>7869494484</b></p></li>
            <li className="list-group-item fs-5">Email: <b>stark.tony.winterfell@gmail.com</b></li>
          </ul>
        </div>
        <div className='text-center m-3'>
        <Link className='btn btn-primary text-center' to='/' >Back To Home</Link >

        </div>
        </div>
  )
}

export default AboutUs
