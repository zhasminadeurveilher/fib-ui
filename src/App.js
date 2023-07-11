import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrentAccounts from './pages/CurrentAccounts';

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<CurrentAccounts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
