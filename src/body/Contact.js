import React from 'react';
import "./Contact.css";
import EmailAdress from "../ContactImages/Email.jpeg";
import PhoneNumber from "../ContactImages/Phone.jpeg";
function Contact() {
  return (
    <div className="ContactInfo">
      Ismael Boro <br/>
      <div className="CenterContactInfo">
      <div className="FlexContactInfo">
      <img className="ContactIconPicture" src={EmailAdress} alt="logo" />
      <div className="EmailAdress"><strong>Email</strong>: boro.ismaela@gmail.com</div>
      </div>
      <div className="FlexContactInfo">
      <img className="ContactIconPicture" src={PhoneNumber} alt="logo" />
      <div className="PhoneNumber"><strong>Phone</strong>: 3476155308</div>
      </div>
      <div>
      <strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/ismaela-boro/">linkedin.com/in/ismaela-boro</a><br/>
      <strong>GitHub:</strong><a href="https://github.com/isborrr"> https://github.com/isborrr </a>
      </div>
      </div>
    </div>
  );
}

export default Contact;
