import api from './Api';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';


export const registerUser = async (formData) => {
  try {
    const res = await api.post(`${API_BASE}/register`, formData);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registration failed' };
  }
};


export const loginUser = async (credentials) => {
    try {
      const res = await api.post(`${API_BASE}/login`, credentials);
      return res.data;
    } catch (error) {
      throw error.response?.data || { message: 'Login failed' };
    }
  };


  export const getProfile = async (userId) => {
    const res = await api.get(`${API_BASE}/profile/${userId}`);
    return res.data;
  };
  

// get all posts

export const getAllPosts = async () => {
    try {
      const token = localStorage.getItem('token'); // 🔑
      const res = await axios.get('http://localhost:5000/api/posts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.error('Error fetching all posts:', error);
      throw error;
    }
  };
  
  
  // create posts

  export const createPost = async (content) => {
    try {
      const token = localStorage.getItem('token'); 
      const res = await axios.post(
        'http://localhost:5000/api/posts',
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      return res.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };
  