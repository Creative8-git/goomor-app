import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../supabase'; // Ensure you are importing the correct Supabase client
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/order'); // Redirect to the protected page after login
      }
    });

    // Clean up the subscription
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [navigate]);

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '1rem' }}>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#df5e17', // Primary color
                brandAccent: '#001659', // Secondary color
              },
            },
          },
        }}
        theme="light" // Optional: Enable social login
      />
    </div>
  );
};

export default Login;
