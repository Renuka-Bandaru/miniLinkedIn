// src/pages/Register.jsx
import { useState } from 'react';
import '../Styles/Auth.css'
import { useAuth } from '../Context/AuthContext';
import { registerUser } from '../Utils/apiCalls';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: ''});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerUser({name: formData.name, email: formData.email, password: formData.password });
      alert('Registration successful!');
    } catch (err) {
      alert(err.message);
    }
    const newUser = {
      id: Date.now(),
      ...formData
    };

    login(newUser);
    console.log('Register:', formData);
    navigate('/login')    
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
