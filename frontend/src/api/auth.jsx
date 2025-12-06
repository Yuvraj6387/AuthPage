// src/api/auth.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export async function signup(email, password) {
  return axios.post(`${API_URL}/api/auth/signup`, { email, password });
}

export async function login(email, password) {
  return axios.post(`${API_URL}/api/auth/login`, { email, password });
}
