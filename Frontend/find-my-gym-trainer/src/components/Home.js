import React from "react";
import data from "../images/ConstantData";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="card bg-body-secondary mt-3" style={{"border":"2px solid black","boxShadow":"1px 2px 3px"}}>
          <div class="card-header">
           <h3> Welcome to Gym</h3>
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR PERSONAL TRAINING SHOULD REFLECT THAT!</h5>
            <p class="card-text"> Get fit fast with Waves Gym’s certified personal trainers. Enjoy cardio, strength, and weight training with top equipment. Join now and make ‘Impossible’ ‘I’m Possible’!</p>
            <Link to="/getmembership">
              <Button className="btn btn-primary mb-">Get MemberShip</Button>
            </Link>
          </div>
          <hr/>
        </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={data.hanuman} class="d-block w-100"  style={{"width":"100%"}} alt="broken" />
          </div>
          <div className="carousel-item ">
            <img src={data.gym3} class="d-block w-100" alt="broken" />
          </div>
          <div className="carousel-item">
            <img src={data.gym102} class="d-block w-100" alt="broken" />
          </div>
          <div className="carousel-item">
            <img src={data.gym1} class="d-block w-100" alt="broken" />
          </div>
          <div className="carousel-item">
            <img src={data.gym2} class="d-block w-100" alt="broken" />
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
      <div>
      <hr/>
     </div>
      <div style={{"textAlign":"center","border":"2px solid black","boxShadow":"1px 2px 3px"}}>
        <h3>Our Programs</h3>
      </div>
        <div>
        <hr/>
      </div>
      <div className="card-group m-2" >
      <div className="card bg-body-secondary m-2" style={{"width": "18rem", "height":"25%","alignItems":"center","boxShadow":"1px 2px 3px"}}>
        <img src={data.cycle} className="card-img-top mt-3" alt="..." style={{"height":"300px","width":"400px"}}/>
        <div className="card-body bg-body-secondary">
          <h5 className="card-title">Indoor Cycling</h5>
          <p className="card-text">
            Burn 700cal with Pune’s best Indoor Cycling Party!
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Key Benefits:</li>
          <li className="list-group-item">Enhance heart health and expand lung capacity</li>
          <li className="list-group-item">Accelerate fat loss and weight management</li>
        </ul>
      </div>
      <div className="card bg-body-secondary m-2" style={{"width": "18rem", "height":"25%","alignItems":"center","boxShadow":"1px 2px 3px"}}>
        <img src={data.crossfit} className="card-img-top mt-3" alt="..." style={{"height":"300px","width":"400px"}}/>
        <div className="card-body bg-body-secondary">
          <h5 className="card-title">CrossFit Training </h5>
          <p className="card-text">
          Take your workout to the next level with CrossFit 
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">WHY CROSSFIT WORKS?</li>
          <li className="list-group-item">CrossFit works because it is for everyone! From the fittest athletes in the world to people who have never even stepped into a CrossFit gym!</li>
        </ul>
      </div>
      <div className="card bg-body-secondary m-2" style={{"width": "18rem", "height":"25%","alignItems":"center","boxShadow":"1px 2px 3px"}}>
        <img src={data.yoga} className="card-img-top mt-3" alt="..." style={{"height":"300px","width":"400px"}}/>
        <div className="card-body bg-body-secondary">
          <h5 className="card-title"> Power Yoga</h5>
          <p className="card-text">
          The holistic way to deal with stress and fitness!
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Key Benefits:</li>
          <li className="list-group-item">Promotes weight loss and metabolism</li>
          <li className="list-group-item">Improves muscle tone, mood, and quality of sleep</li>
        </ul>
      </div>
     </div>
     <div>
      <hr/>
     </div>
  </div>
  );
};

export default Home;
