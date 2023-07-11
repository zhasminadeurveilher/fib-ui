import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('customerId');
    navigate('/');
  };

  return (
    <div>
      <nav className='navbar navbar-dark bg-primary'>
        <div
          style={{
            color: 'white',
            marginLeft: '10px',
            marginRight: '10px',
            fontSize: '1.3em',
          }}
        >
          First Investment Bank
        </div>

        <div>
          {localStorage.getItem('token') && (
            <button
              type='button'
              className='btn btn-outline-warning mx-4'
              onClick={onLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
