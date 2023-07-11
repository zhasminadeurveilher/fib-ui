import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Transactions() {
  const [transactions, seTransactions] = useState([]);

  const { currentAccountId } = useParams();

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/customers/1/currentaccounts/${currentAccountId}/transactions`
    );
    seTransactions(result.data);
  };

  const loadAccountData = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/customers/1/currentaccounts/${currentAccountId}`
    );
    seTransactions(result.data);
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <div className='row py-2'>
          <div className='col-sm-4 text-start'>
            <Link to={`/`} className='btn btn-outline-secondary me-2'>
              Back to Accounts 
            </Link>

            <Link to={`/newtransaction`} className='btn btn-outline-primary'>
               New
            </Link>
          </div>
          <div className='col-sm-4'>
            <h3>Transactions</h3>
          </div>
          <div className='col-sm-4'></div>
        </div>
        <table className='table table-hover table-striped border shadow "'>
          <thead>
            <tr>
              <th scope='col' style={{ backgroundColor: '#d3f5d2' }}>
                #
              </th>
              <th scope='col' style={{ backgroundColor: '#d3f5d2' }}>
                Created At
              </th>
              <th scope='col' style={{ backgroundColor: '#d3f5d2' }}>
                Description
              </th>
              <th scope='col' style={{ backgroundColor: '#d3f5d2' }}>
                Receiver
              </th>
              <th scope='col' style={{ backgroundColor: '#d3f5d2' }}>
                Receiver Account
              </th>
              <th scope='col' style={{ backgroundColor: '#d3f5d2' }}>
                Debit (EUR)
              </th>
              <th scope='col' style={{ backgroundColor: '#d3f5d2' }}>
                Credit (EUR)
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <>
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{transaction.createdAt}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.receiver}</td>
                    <td>{transaction.receiverAccount}</td>
                    <td style={{ color: '#f13131' }}>{!transaction.isCredit && transaction.amount}</td>
                    <td style={{ color: '#23961d' }}>{transaction.isCredit &&transaction.amount}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
