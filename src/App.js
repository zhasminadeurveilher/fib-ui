import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrentAccounts from './pages/CurrentAccounts';
import NewCurrentAccount from './pages/NewCurrentAccount';
import Transactions from './pages/Transactions';
import NewTransaction from './pages/NewTransaction';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<CurrentAccounts />} />
          <Route exact path='/newcurrentaccount' element={<NewCurrentAccount />} />
          <Route exact path='/viewtransactions/:currentAccountId' element={<Transactions />} />
          <Route exact path='/newtransaction/:currentAccountId' element={<NewTransaction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
