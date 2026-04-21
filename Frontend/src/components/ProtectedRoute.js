import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase'; // Your Supabase client instance

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login'); // Redirect to login page if not authenticated
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [navigate]);

  if (!isAuthenticated) {
    return <div>Loading...</div>; // Display a loading state while checking authentication
  }

  return <>{children}</>;
};

export default ProtectedRoute;
