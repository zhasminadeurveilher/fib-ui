import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function NewTransaction() {
  let navigate = useNavigate();

  const { currentAccountId } = useParams();

  const [transaction, setTransaction] = useState({
    description: '',
    receiver: '',
    receiverAccount: '',
    amount: '',
    isCredit: false,
  });

  const { description, receiver, receiverAccount, amount} = transaction;

  const onInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const customerId = localStorage.getItem('customerId');

    await axios.post(`http://localhost:8080/api/customers/${customerId}/currentaccounts/${currentAccountId}/transactions`, transaction, {headers: {
        'Authorization': token ? `Bearer ${token}` : undefined,
      },});
    navigate(`/viewtransactions/${currentAccountId}`);
  };

  return (
    <div className='container '>
        <div className='py-4 d-flex justify-content-center'>
        <div className='col-md-6 ooset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>New Transaction</h2>
          <form onSubmit={onSubmit} >
            <div className='mb-3'>
              <label htmlFor='description' className='form-label'>
                Description
              </label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Ex. Rent House'
                name='description'
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='receiver' className='form-label'>
                Receiver
              </label>
              <input
                required
                type={'text'}
                className='form-control'
                placeholder='Ex. John Smith'
                name='receiver'
                value={receiver}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='receiverAccount' className='form-label'>
                Receiver Account
              </label>
              <input
              required
                type={'text'}
                className='form-control'
                placeholder='BE## #### #### ####'
                name='receiverAccount'
                value={receiverAccount}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='amount' className='form-label'>
               Amount
              </label>
              <input
              required
                type={'text'}
                className='form-control'
                name='amount'
                value={amount}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <button type='submit' className='btn btn-outline-primary'>
                Submit
              </button>
              <Link
                to={`/viewtransactions/${currentAccountId}`}
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
