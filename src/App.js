import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrentAccounts from './pages/CurrentAccounts';
import NewCurrentAccount from './pages/NewCurrentAccount';
import Transactions from './pages/Transactions';
import NewTransaction from './pages/NewTransaction';
import Login from './pages/Login';
import Navbar from './layout/Navbar';

function App() {

  return (
    <div className='App'>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/accounts' element={<CurrentAccounts />} />
          <Route exact path='/newcurrentaccount' element={<NewCurrentAccount />} />
          <Route exact path='/viewtransactions/:currentAccountId' element={<Transactions />} />
          <Route exact path='/newtransaction/:currentAccountId' element={<NewTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
