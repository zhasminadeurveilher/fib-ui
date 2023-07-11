import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrentAccounts from './pages/CurrentAccounts';
import NewCurrentAccount from './pages/NewCurrentAccount';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<CurrentAccounts />} />
          <Route exact path='/newcurrentaccount' element={<NewCurrentAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
