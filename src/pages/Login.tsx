import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  InputAdornment, 
  IconButton,
  Divider,
  Checkbox,
  FormControlLabel,
  Link,
  useTheme,
  Paper
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  Email, 
  Lock,
  GitHub as GitHubIcon,
  Google as GoogleIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate here
    navigate('/dashboard');
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: theme.palette.background.default,
        p: 2
      }}
    >
      <Paper 
        elevation={12} 
        sx={{ 
          display: 'flex', 
          width: '100%', 
          maxWidth: '900px',
          overflow: 'hidden',
          borderRadius: 2
        }}
      >
        {/* Left side - Login Form */}
        <Box 
          sx={{ 
            flex: 1, 
            p: 4
          }}
        >
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
              Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please sign in to continue
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Email Address"
              variant="outlined"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Link href="#" variant="body2" underline="hover">
                Forgot password?
              </Link>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              sx={{ mt: 2, mb: 3, py: 1.2 }}
            >
              Sign In
            </Button>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                OR
              </Typography>
            </Divider>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ py: 1 }}
              >
                Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GitHubIcon />}
                sx={{ py: 1 }}
              >
                GitHub
              </Button>
            </Box>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link href="#" underline="hover" fontWeight="bold">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right side - Image and Info */}
        <Box 
          sx={{ 
            flex: 1, 
            bgcolor: 'primary.main', 
            color: 'white',
            display: { xs: 'none', md: 'flex' }, 
            flexDirection: 'column',
            justifyContent: 'center',
            p: 6,
            position: 'relative'
          }}
        >
          <Box sx={{ maxWidth: '400px' }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              React Dashboard
            </Typography>
            <Typography variant="h6" gutterBottom>
              Modern Admin Dashboard
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, mb: 4 }}>
              A comprehensive dashboard solution with analytics, user management, and more. Built with React, TypeScript, and Material UI.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
              <Box sx={{ textAlign: 'center', p: 2, borderRadius: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Typography variant="h5">20+</Typography>
                <Typography variant="body2">Pages</Typography>
              </Box>
              <Box sx={{ textAlign: 'center', p: 2, borderRadius: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Typography variant="h5">10+</Typography>
                <Typography variant="body2">Components</Typography>
              </Box>
              <Box sx={{ textAlign: 'center', p: 2, borderRadius: 1, bgcolor: 'rgba(255,255,255,0.1)' }}>
                <Typography variant="h5">5+</Typography>
                <Typography variant="body2">Charts</Typography>
              </Box>
            </Box>
          </Box>

          {/* Decorative elements */}
          <Box sx={{ 
            position: 'absolute', 
            width: '300px', 
            height: '300px', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            bottom: '-100px',
            right: '-100px'
          }} />
          <Box sx={{ 
            position: 'absolute', 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            top: '50px',
            left: '-50px'
          }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default Login; 