import React from 'react';

import '../styles/contact.css';
import NavBar from './NavBar';

function ContactUs() {
  return (
    <>
      <NavBar />
    <div className="contact-container">
      <div className="contact-content">
        <div className="left-side">
          <h1 className="heading">Contact Us</h1>
          <div className="address details">
          
            {/* <i className="fas fa-map-marker-alt"></i> */}
            <div className="topic">Address</div>
            <div className="text-one">Vishwakarma Institute of Technology</div>
            <div className="text-two">Bibwewadi, Pune</div>
          </div>
          <div className="phone details">
            {/* <i className="fas fa-phone-alt"></i> */}
            <div className="topic">Phone</div>
            <div className="text-one">9678143423</div>
            <div className="text-two">02045681</div>
          </div>
          <div className="email details">
            {/* <i className="fas fa-envelope"></i> */}
            <div className="topic">Email</div>
            <div className="text-one">nulife@gmail.com</div>
            <div className="text-two"></div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>If you have any queries, we will directly contact you. It's our pleasure to help you.</p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your contact no." />
            </div>
            <div className="input-box message-box"></div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
