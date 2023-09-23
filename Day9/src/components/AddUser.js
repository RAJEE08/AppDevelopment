import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/usersSlice';
import './user.css';

function AddUser() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const id = Date.now();

    const user = { ...userInfo, id };

    dispatch(addUser(user));

    setUserInfo({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className='add'>
      <form id='addform'>
      <h2>Add User</h2>
        <div>
          <label htmlFor="name">UserName:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <button type="button" onClick={handleSubmit}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;