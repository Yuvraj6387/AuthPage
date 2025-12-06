// src/components/Signup.jsx
import { useState } from 'react';
import { signup } from '../api/auth';

export default function Signup({ onAuthSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(email, password);
      // After successful signup, we can auto-login or redirect to login
      onAuthSuccess && onAuthSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      height:"70vh"
      
    }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{
          marginBottom :"10px"
        }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{
          marginBottom :"10px"
        }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
