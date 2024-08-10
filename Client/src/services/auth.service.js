import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

export const login = async (email, password) => {
  const response = await axios.post(API_URL + 'login', { email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const signup = async (name, email, password) => {
  const response = await axios.post(API_URL + 'signup', { name, email, password });
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const forgotPassword = async (email) => {
  return await axios.post(API_URL + 'forgot-password', { email });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};