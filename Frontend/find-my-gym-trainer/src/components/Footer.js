import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faInstagram, faSnapchat,faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="footer-dark" id="aboutFooter">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Basic training</a>
                  </li>
                  <li>
                    <a href="#">Body Building</a>
                  </li>
                  <li>
                    <a href="#">Best Trainers</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
                </div>
                <div className="col-md-6 item text">
                <h3>Find My Gym Trainer</h3>
                <p>
                  Your ultimate destination for connecting with certified  fitness professional 
                </p>
                <br/>
                <p>Developer: Deepak Siddhesh Subrato Ajay</p>
              </div>
            </div>
            <div className='row' >
                    <div className='col-sm-6 col-md-3 item'>
                        <div className="col  item social">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF}  />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram}  />
                                </a>
                                <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter}  />
                                </a>
                                <a href="https://www.snapchat.com/ " target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faSnapchat}  />
                                </a><br/>
                                <p className="copyright bringCenter">© 2024 FindMyGymTrainer.In All rights Reserved</p>
                                <p className='copyright bringCenter'> Terms And Conditions | privacy </p> 
                        
                        </div>
                     </div>  
                     <div className='col-sm-6 col-md-3 map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4235201695237!2d73.8099821746519!3d18.509753869505673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065a7c56561%3A0xe6e0299d0330dcf9!2sInfoway%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1707988396460!5m2!1sen!2sin" width="600" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                     </div>
                      
            </div>
            
           
            
          </div>
        </footer>
      </div>
  
    )
}

export default Footer
