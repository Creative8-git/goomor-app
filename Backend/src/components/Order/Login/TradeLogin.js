import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.status !== 200) {
      setError(data.error);
    } else {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setUser(data.user); // ✅ Instantly update auth state

      // ✅ New: Dispatch storage event so `useAuth.js` updates
      window.dispatchEvent(new Event('storage'));

      navigate('/dashboard', { replace: true });
    }
  };

  return (
    <div>
      <h2>Trade Partner Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
