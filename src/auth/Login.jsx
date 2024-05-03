import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../config.js'
export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthRedirect = () => {
      const queryParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = queryParams.get('access_token');
      
      // Obtém o cookie chamado 'user'
      const userCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('user='));

      if (accessToken || userCookie) {
        localStorage.setItem('user', accessToken || userCookie.split('=')[1]);
        navigate("/");
      }
    };

    window.addEventListener('hashchange', handleAuthRedirect);

    return () => {
      window.removeEventListener('hashchange', handleAuthRedirect);
    };
  }, [navigate]);

  useEffect(() => {
    window.location.href = config.authDiscord;
  }, []);

  return <></>;
};
