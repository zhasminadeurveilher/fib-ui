import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function CurrentAccounts() {
  const [currentAccounts, setCurrentAccounts] = useState([]);

  useEffect(() => {
    loadCurrentAccounts();
  }, []);

  const loadCurrentAccounts = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/customers/1/currentaccounts`
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
        <table className='table border shadow'>
          <thead>
            <tr>
              <th scope='col' style={{ backgroundColor: '#f1f1f1' }}>
                #
              </th>
              <th scope='col' style={{ backgroundColor: '#f1f1f1' }}>
                Balance
              </th>
              <th scope='col' style={{ backgroundColor: '#f1f1f1' }}>
                Currency
              </th>
              <th scope='col' style={{ backgroundColor: '#f1f1f1' }}>
                Name
              </th>
              <th scope='col' style={{ backgroundColor: '#f1f1f1' }}>
                Account Number
              </th>
              <th scope='col' style={{ backgroundColor: '#f1f1f1' }}></th>
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
