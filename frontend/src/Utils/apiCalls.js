import api from './Api';

export const registerUser = async (formData) => {
  try {
    const res = await api.post('api/register', formData);
    return res.data;
  } catch (error) {
    console.error("Register Error:", error); 
    throw error.response?.data || { message: 'Registration failed' };
  }
};

export const loginUser = async (credentials) => {
  try {
    const res = await api.post('api/login', credentials);
    return res.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error.response?.data || { message: 'Login failed' };
  }
};

export const getProfile = async (userId) => {
  try {
    const res = await api.get(`api/profile/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const res = await api.get('api/posts');
    return res.data;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    throw error;
  }
};

export const createPost = async (content) => {
  try {
    const res = await api.post('api/posts', { content });
    return res.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};
