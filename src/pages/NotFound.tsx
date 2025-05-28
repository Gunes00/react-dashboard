import React from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          py: 4,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 100, color: 'error.main', mb: 4 }} />
        
        <Typography variant="h1" component="h1" gutterBottom fontWeight="bold">
          404
        </Typography>
        
        <Typography variant="h4" component="h2" gutterBottom>
          Sayfa Bulunamadı
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
          Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            Geri Dön
          </Button>
          
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/dashboard')}
          >
            Gösterge Paneline Git
          </Button>
        </Box>

        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '5%', md: '15%' },
            right: '10%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.light}22 0%, ${theme.palette.primary.light}00 70%)`,
            zIndex: -1,
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '10%',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.secondary.light}22 0%, ${theme.palette.secondary.light}00 70%)`,
            zIndex: -1,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            right: '15%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.error.light}22 0%, ${theme.palette.error.light}00 70%)`,
            zIndex: -1,
          }}
        />
      </Box>
    </Container>
  );
};

export default NotFound;
