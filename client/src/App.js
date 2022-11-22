import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
