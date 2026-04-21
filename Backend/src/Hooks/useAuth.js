import { useEffect, useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(() => {
    const cachedUser = localStorage.getItem('user');
    return cachedUser ? JSON.parse(cachedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      const data = await response.json();
      if (response.status === 200) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();

    // ✅ New: Listen for `storage` event (updates when localStorage changes)
    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem('user');
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { user, loading, setUser };
};

export default useAuth;
