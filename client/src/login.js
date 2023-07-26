import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const  navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/login', {
        email,
        password,
      });
      console.log(res)
      if (res.status === 200 && res.data) {
        localStorage.setItem('token', res.data);
        navigate('/Dashboard');
      } else {
        setError('Invalid email or password!');
      }
    } catch (error) {
      console.log(error);
      alert('Error logging in. Please try again later.');
    }
  };

  return (
    <div className='login-container'>
     
      {error && <p className="error">{error}</p>}
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlfor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlfor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log in</button>
     
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </form>
    </div>
  );
}

export default Login;