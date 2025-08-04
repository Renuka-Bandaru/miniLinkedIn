import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate()
  const {token, logout} = useAuth();

  const handleLogout = () => {
    logout();          // clear token and context
    navigate("/");     // redirect to homepage
  };

  return (

    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MiniLinkedIn</Link>
        </div>
        <div className="navbar-links">
          
          <Link to="/">Home</Link>
          
          
            {token ? (
              <>
              <button onClick={handleLogout}>Logout</button>
              <Link to='/profile' >Profile</Link>
              </>
              
            ) : (
              <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              </>
            )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
