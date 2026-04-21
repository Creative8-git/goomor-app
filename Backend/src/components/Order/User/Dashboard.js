import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);

    window.dispatchEvent(new Event('storage'));

    navigate('/login', { replace: true });
  };

  return (
    <div>
      <h2>Trade Partner Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/order">Place an Order</Link></li> {/* ✅ Ensure correct link */}
          <li><Link to="/orders">View Order History</Link></li>
          <li><Link to="/address-book">Manage Addresses</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
