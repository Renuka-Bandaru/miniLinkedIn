import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E40AF' }}>
      <Toolbar
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
          Mini<span style={{ color: '#FFD700' }}>LinkedIn</span>
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: 'white', textTransform: 'none' }}>
            Home
          </Button>

          {!user ? (
            <>
              <Button component={Link} to="/login" sx={{ color: 'white', textTransform: 'none' }}>
                Login
              </Button>
              <Button component={Link} to="/register" sx={{ color: 'white', textTransform: 'none' }}>
                Register
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to={`/profile/${user.id}`} sx={{ color: 'white', textTransform: 'none' }}>
                Profile
              </Button>
              <Button onClick={handleLogout} sx={{ color: 'white', textTransform: 'none' }}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
