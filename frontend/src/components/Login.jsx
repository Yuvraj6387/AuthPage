// src/components/Login.jsx
import { useState } from 'react';
import { login } from '../api/auth';


export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const resp = await login(email, password);
      const token = resp.data.token;
      // store token locally (e.g. localStorage)
      localStorage.setItem('token', token);
      onLogin({ email, token });
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
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
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
