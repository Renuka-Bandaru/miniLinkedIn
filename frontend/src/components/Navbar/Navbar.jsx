import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate()
  const {user, logout} = useAuth();


  return (

    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MiniLinkedIn</Link>
        </div>
        <div className="navbar-links">
          
          <Link to="/">Home</Link>
          
          
            {user ? (
              <>
              <button onClick={logout}>Logout</button>
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
