import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const {data} = await axios.post('http://localhost:8080/api/auth/login', user);

    if (data.accessToken) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('customerId', data.customerId);
        navigate('/accounts');
      }
  };

  return (
    <div className='container '>
        <div className='py-4 d-flex justify-content-center'>
        <div className='col-md-4 ooset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Log In</h2>
          <form onSubmit={onSubmit} >
            <div className='mb-3'>
              <label htmlFor='username' className='form-label mt-3'>
                Username
              </label>
              <input
                required
                type={'text'}
                className='form-control'
                name='username'
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
               Password
              </label>
              <input
                required
                type={'password'}
                className='form-control'
                name='password'
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <button type='submit' className='btn btn-outline-primary'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
