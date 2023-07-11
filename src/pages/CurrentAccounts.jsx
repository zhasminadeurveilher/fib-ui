import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CurrentAccounts() {
  const [currentAccounts, setCurrentAccounts] = useState([]);

  useEffect(() => {
    loadCurrentAccounts();
  }, []);

  const loadCurrentAccounts = async () => {
    const token = localStorage.getItem('token');
    const customerId = localStorage.getItem('customerId');

    const result = await axios.get(
      `http://localhost:8080/api/customers/${customerId}/currentaccounts`, {
        headers: {
          'Authorization': token ? `Bearer ${token}` : undefined,
        },
      }
    );
    setCurrentAccounts(result.data);
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <div className='row py-2'>
          <div className='col-sm-4 text-start'>
            <Link to={`/newcurrentaccount`} className='btn btn-outline-primary'>
              New
            </Link>
          </div>
          <div className='col-sm-4'>
            <h3>Current Accounts</h3>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <table className='table table-hover table-striped border shadow'>
          <thead>
            <tr>
              <th scope='col' style={{ backgroundColor: '#f8efa1' }}>
                #
              </th>
              <th scope='col' style={{ backgroundColor: '#f8efa1' }}>
                Balance
              </th>
              <th scope='col' style={{ backgroundColor: '#f8efa1' }}>
                Currency
              </th>
              <th scope='col' style={{ backgroundColor: '#f8efa1' }}>
                Name
              </th>
              <th scope='col' style={{ backgroundColor: '#f8efa1' }}>
                Account Number
              </th>
              <th scope='col' style={{ backgroundColor: '#f8efa1' }}></th>
            </tr>
          </thead>
          <tbody>
            {currentAccounts.map((account, index) => {
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{account.balance}</td>
                  <td>{account.currency}</td>
                  <td>{account.name}</td>
                  <td>{account.accountNumber}</td>
                  <td>
                    <Link
                      to={`/viewtransactions/${account.id}`}
                      className='btn btn-outline-primary mx-2'
                    >
                      Transactions
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
