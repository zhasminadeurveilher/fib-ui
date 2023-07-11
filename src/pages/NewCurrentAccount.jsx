import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewCurrentAccount() {
  let navigate = useNavigate();

  const [currentAccount, setCurrentAccount] = useState({
    name: '',
    initialCredit: 0,
  });

  const { name, initialCredit} = currentAccount;

  const onInputChange = (e) => {
    setCurrentAccount({ ...currentAccount, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const customerId = localStorage.getItem('customerId');

    await axios.post(`http://localhost:8080/api/customers/${customerId}/currentaccounts`, currentAccount, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : undefined,
      },});
    navigate('/accounts');
  };


  return (
    <div className='container '>
        <div className='py-4 d-flex justify-content-center'>
        <div className='col-md-6 ooset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>New Current Account</h2>
          <form onSubmit={onSubmit} >
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Ex. Groceries expenses'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='initialCredit' className='form-label'>
               Initial Credit (EUR)
              </label>
              <input
                type={'text'}
                className='form-control'
                name='initialCredit'
                value={initialCredit}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <button type='submit' className='btn btn-outline-primary'>
                Submit
              </button>
              <Link
                to='/accounts'
                type='button'
                className='btn btn-outline-danger mx-2'
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
