import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardHeader, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper
} from '@mui/material';

const Analytics: React.FC = () => {
  // Sample data for tables
  const trafficSourcesData = [
    { source: 'Direct', visitors: 5376, percentage: 43.5 },
    { source: 'Organic Search', visitors: 3822, percentage: 30.9 },
    { source: 'Referral', visitors: 1845, percentage: 14.9 },
    { source: 'Social Media', visitors: 1026, percentage: 8.3 },
    { source: 'Email', visitors: 295, percentage: 2.4 },
  ];

  const pageViewsData = [
    { page: '/dashboard', views: 2862, uniqueVisitors: 1924 },
    { page: '/products', views: 1753, uniqueVisitors: 1286 },
    { page: '/checkout', views: 1143, uniqueVisitors: 968 },
    { page: '/blog', views: 982, uniqueVisitors: 721 },
    { page: '/contact', views: 632, uniqueVisitors: 495 },
  ];

  const conversionData = [
    { metric: 'Conversion Rate', value: '3.42%', change: '+0.3%' },
    { metric: 'Bounce Rate', value: '47.58%', change: '-1.2%' },
    { metric: 'Avg. Session Duration', value: '2m 34s', change: '+12s' },
    { metric: 'Pages per Session', value: '3.2', change: '+0.4' },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Analytics Dashboard
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
        {conversionData.map((item) => (
          <Box key={item.metric} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' } }}>
            <Card elevation={3}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {item.metric}
                </Typography>
                <Typography variant="h4" component="div">
                  {item.value}
                </Typography>
                <Typography 
                  variant="body2" 
                  color={item.change.startsWith('+') ? 'success.main' : 'error.main'}
                >
                  {item.change} from last month
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 47%' } }}>
          <Card elevation={3}>
            <CardHeader title="Traffic Sources" />
            <CardContent>
              <TableContainer component={Paper} elevation={0}>
                <Table aria-label="traffic sources table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Source</TableCell>
                      <TableCell align="right">Visitors</TableCell>
                      <TableCell align="right">Percentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {trafficSourcesData.map((row) => (
                      <TableRow key={row.source}>
                        <TableCell component="th" scope="row">
                          {row.source}
                        </TableCell>
                        <TableCell align="right">{row.visitors.toLocaleString()}</TableCell>
                        <TableCell align="right">{row.percentage}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
        
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 47%' } }}>
          <Card elevation={3}>
            <CardHeader title="Page Views" />
            <CardContent>
              <TableContainer component={Paper} elevation={0}>
                <Table aria-label="page views table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Page</TableCell>
                      <TableCell align="right">Views</TableCell>
                      <TableCell align="right">Unique Visitors</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pageViewsData.map((row) => (
                      <TableRow key={row.page}>
                        <TableCell component="th" scope="row">
                          {row.page}
                        </TableCell>
                        <TableCell align="right">{row.views.toLocaleString()}</TableCell>
                        <TableCell align="right">{row.uniqueVisitors.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
        
        <Box sx={{ flex: '1 1 100%', mt: 2 }}>
          <Card elevation={3}>
            <CardHeader title="Browser Usage" />
            <CardContent>
              <TableContainer component={Paper} elevation={0}>
                <Table aria-label="browser usage table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Browser</TableCell>
                      <TableCell align="right">Users</TableCell>
                      <TableCell align="right">New Users</TableCell>
                      <TableCell align="right">Bounce Rate</TableCell>
                      <TableCell align="right">Avg. Session</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Chrome</TableCell>
                      <TableCell align="right">4,234</TableCell>
                      <TableCell align="right">2,862</TableCell>
                      <TableCell align="right">45.2%</TableCell>
                      <TableCell align="right">2m 45s</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Safari</TableCell>
                      <TableCell align="right">2,152</TableCell>
                      <TableCell align="right">1,543</TableCell>
                      <TableCell align="right">48.7%</TableCell>
                      <TableCell align="right">2m 12s</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Firefox</TableCell>
                      <TableCell align="right">1,845</TableCell>
                      <TableCell align="right">1,067</TableCell>
                      <TableCell align="right">51.3%</TableCell>
                      <TableCell align="right">2m 01s</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Edge</TableCell>
                      <TableCell align="right">876</TableCell>
                      <TableCell align="right">534</TableCell>
                      <TableCell align="right">49.8%</TableCell>
                      <TableCell align="right">1m 56s</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics; 