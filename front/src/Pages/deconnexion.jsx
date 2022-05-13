/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContex from '../contex/AuthContex';

const Deconnexion = () => {
  const { dispatchAPI } = useAuthContex();
  const navigate = useNavigate();
  useEffect(() => {
    const result = dispatchAPI('deconnexion');
    if (result.data) {
      navigate('/connexion');
    } 
  }, []);

  return <div />;
};
export default Deconnexion;
