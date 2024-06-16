// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Vendor from '../src/pages/Vendor';  
import Volunteer from './pages/Volunteer';
import Beneficiary from './pages/Beneficiary';
// import NGOInformation from './pages/Divider';
import About from './pages/About';
import Home from './pages/Home'; 
import Login from './components/ui/Login';
import Vet from './pages/Vet';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/vendor"></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/Beneficiary" element = {< Beneficiary/>}/>
          <Route path="/login" element = {< Login/>}/>
          <Route path="/About" element = {< About/>}/>
          <Route path="/Vet/:uid" element = {< Vet/>}/>

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
