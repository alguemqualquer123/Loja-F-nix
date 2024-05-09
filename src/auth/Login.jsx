import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authDiscord } from '@app/config.js'
import { InstanceSettings } from '@app/Server/Auth/server'
export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = queryParams.get('access_token');
    const userData = queryParams.get('user_data');
    if (accessToken || userData) {
      const user = userData ? JSON.parse(decodeURIComponent(userData)) : null;
      InstanceSettings.saveUserProfile(user)
      localStorage.setItem('user', JSON.stringify(user));
    }
    navigate("/");
  }, []);
  return <></>;
};
