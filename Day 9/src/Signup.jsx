import React from 'react';
import './Signup.css';
import AddUser from './components/AddUser';

function Signup() {
  
  

  return (
    <div className="signup-container">
       <div className="description">
    <h2 className="description-title">Be a Human, Save Lives!</h2>
    <p>
    Organ donation is a selfless act that gives the gift of life, <br></br>
    offering hope and a second chance to those in need of life-saving transplants.
    </p>
  </div>
      <AddUser />
    </div>
  );
}

export default Signup;