import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import Dashboard from './pages/Dashboard';
import Telegram from './pages/Telegram';
import Twitter from './pages/Twitter';
import UPI from './pages/UPI';
import Youtube from './pages/Youtube';
import Login from './login';  
import Register from './register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard"  element={<div className="main-content"><Navbar/><Dashboard /></div>} />
          <Route path="/telegram"  element={<div className="main-content"><Navbar/><Telegram /></div>} />
          <Route path="/twitter" element={<div className="main-content"><Navbar/><Twitter /></div>} />
          <Route path="/upi"  element={<div className="main-content"><Navbar/><UPI /></div>} />
          <Route path="/youtube"  element={<div className="main-content"><Navbar/><Youtube /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
