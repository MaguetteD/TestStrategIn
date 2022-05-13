/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';

const AuthContext = createContext();
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' }
});
export const AuthContextProvider = ({ children }) => {
  const loginAPI = async (email, mdp) => {
    const result = await axiosInstance.post('/login', {
      email,
      mdp
    });
    if (result) {
      localStorage.setItem('token', result.data);
      window.location = '/Lister';
    } 
    return result;
  };

  const registerAPI = async (values) => {
    const result = await axiosInstance.post('/inscription', values);
    if (result.data) {
      window.location = '/connexion';
    }
    return result;
  };

  const ListerAPI = async () => {
    const result = await axiosInstance.get('/Lister', {
      headers: { 'x-access-token': localStorage.getItem('token') }
    });
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('token');
      window.location = '/connexion';
    } else {
      const decode = jwt(token);
      if (!decode) {
        localStorage.removeItem('token');
        window.location = '/connexion';
      }
    }
    return result;
  };

  const logout = () => {
    const result = axiosInstance.get('/deconnxion');
    localStorage.clear();
    window.location = '/connexion';
    return result;
  };

  const dispatchAPI = (type, options) => {
    switch (type) {
      case 'login':
        return loginAPI(options.email, options.mdp);
      case 'inscription':
        return registerAPI(options);
      case 'Lister':
        return ListerAPI();
      case 'deconnexion':
        return logout();
      default:
        return new Error('Unknown dispatchAPI type!');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        dispatchAPI
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default () => useContext(AuthContext);
