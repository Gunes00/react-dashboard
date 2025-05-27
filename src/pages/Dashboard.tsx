import React, { useRef, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  useTheme,
  CardHeader,
  IconButton
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement, 
  ArcElement 
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const lineChartRef = useRef<ChartJS<"line">>(null);
  const barChartRef = useRef<ChartJS<"bar">>(null);
  const doughnutChartRef = useRef<ChartJS<"doughnut">>(null);

  // Sample data for charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [65, 59, 80, 81, 56, 55, 72],
        borderColor: theme.palette.primary.main,
        backgroundColor: 'rgba(63, 81, 181, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Sales 2022',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: theme.palette.secondary.main,
        backgroundColor: 'rgba(245, 0, 87, 0.1)',
        tension: 0.3,
      },
    ],
  };

  const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000],
        backgroundColor: theme.palette.primary.main,
      },
      {
        label: 'Expenses',
        data: [9000, 12000, 11000, 14000],
        backgroundColor: theme.palette.secondary.main,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.success?.main || '#4caf50',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Update charts when theme changes
  useEffect(() => {
    if (lineChartRef.current) {
      lineChartRef.current.update();
    }
    if (barChartRef.current) {
      barChartRef.current.update();
    }
    if (doughnutChartRef.current) {
      doughnutChartRef.current.update();
    }
  }, [theme]);

  const statsItems = [
    { title: 'Total Revenue', value: '$54,350', delta: '+12%' },
    { title: 'Total Users', value: '8,294', delta: '+18%' },
    { title: 'New Customers', value: '1,432', delta: '+7%' },
    { title: 'Pending Orders', value: '43', delta: '-5%' },
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard Overview
      </Typography>
      
      {/* Stats Cards */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
        {statsItems.map((item) => (
          <Box key={item.title} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' } }}>
            <Card elevation={3}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h4" component="div">
                  {item.value}
                </Typography>
                <Typography 
                  variant="body2" 
                  color={item.delta.startsWith('+') ? 'success.main' : 'error.main'}
                >
                  {item.delta} from last month
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Charts */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 64%' } }}>
          <Card elevation={3}>
            <CardHeader
              title="Sales Overview"
              subheader="Monthly sales performance"
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Box sx={{ height: 300, position: 'relative' }}>
                <Line 
                  ref={lineChartRef}
                  data={lineChartData} 
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: false,
                  }} 
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 32%' } }}>
          <Card elevation={3}>
            <CardHeader
              title="Device Usage"
              subheader="User access by device"
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Box sx={{ height: 300, position: 'relative' }}>
                <Doughnut 
                  ref={doughnutChartRef}
                  data={doughnutChartData} 
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: false,
                  }} 
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: '1 1 100%', mt: 2 }}>
          <Card elevation={3}>
            <CardHeader
              title="Quarterly Performance"
              subheader="Revenue vs. Expenses"
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Box sx={{ height: 300, position: 'relative' }}>
                <Bar 
                  ref={barChartRef}
                  data={barChartData} 
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: false,
                  }} 
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 