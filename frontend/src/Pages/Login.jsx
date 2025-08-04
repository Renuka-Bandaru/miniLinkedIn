import { useState } from 'react';
import '../Styles/Auth.css'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Utils/apiCalls';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login:', formData);

    try {
      const data = await loginUser({ email: formData.email, password: formData.password });
      localStorage.setItem('token', data.token);
      alert('Login success');
      login(data.token);
    } catch (err) {
      alert(err.message);
    }
    
      navigate('/profile');
    
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
