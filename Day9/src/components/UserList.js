import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../features/usersSlice';
import './user.css';

function UserList() {
  const users = useSelector((state) => state.users);
  console.log(users)
  const dispatch = useDispatch();

  const handleDelete = (user) => {
    dispatch(deleteUser(user));
  };

  return (
    <div className='list'><br></br>
      <h2>User List</h2>
      <table id='table'>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user)}><i className="fas fa-trash-alt"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;