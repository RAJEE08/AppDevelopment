import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../features/usersSlice';
import './user.css';
import { MdDelete } from 'react-icons/md';

function UserList() {
  const users = useSelector((state) => state.users);
  console.log(users)
  const dispatch = useDispatch();

  const handleDelete = (user) => {
    dispatch(deleteUser(user));
  };

  return (
    <div className='list'><br></br>
      <h3 id='tle'>User List</h3>
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
                <button id="b" onClick={() => handleDelete(user)}><MdDelete fontSize='20'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;