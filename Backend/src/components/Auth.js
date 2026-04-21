import React, { useState } from 'react';
import supabase from './supabase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // const handleSignUp = async () => {
  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   });
  //   setMessage(error ? error.message : 'Check your email for a confirmation link.');
  // };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setMessage(error ? error.message : 'Logged in successfully!');
  };

  return (
    <div>
      <h1>Supabase Auth</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <button onClick={handleSignUp}>Sign Up</button> */}
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Auth;
