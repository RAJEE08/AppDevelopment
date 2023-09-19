import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
       <div className="description">
    <h2 className="description-title">Be a Human, Save Lives!</h2>
    <p>
    Organ donation is a selfless act that gives the gift of life, <br></br>
    offering hope and a second chance to those in need of life-saving transplants.
    </p>
  </div>
      <div className='form'>
        <h2 className='title'>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div><br></br>
          <Link to="/Home"><button type="submit">Sign Up</button></Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;