import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Avatar,
  Card,
  CardContent,
} from '@mui/material';
import {
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'active', lastLogin: '2023-06-15 09:43' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'active', lastLogin: '2023-06-14 14:22' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'Viewer', status: 'inactive', lastLogin: '2023-05-27 11:15' },
  { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', role: 'Editor', status: 'active', lastLogin: '2023-06-15 08:30' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie.wilson@example.com', role: 'Viewer', status: 'active', lastLogin: '2023-06-13 16:48' },
  { id: 6, name: 'Emma Davis', email: 'emma.davis@example.com', role: 'Admin', status: 'active', lastLogin: '2023-06-15 10:05' },
  { id: 7, name: 'Frank Miller', email: 'frank.miller@example.com', role: 'Editor', status: 'inactive', lastLogin: '2023-06-01 09:22' },
  { id: 8, name: 'Grace Taylor', email: 'grace.taylor@example.com', role: 'Viewer', status: 'active', lastLogin: '2023-06-14 11:37' },
  { id: 9, name: 'Henry Adams', email: 'henry.adams@example.com', role: 'Editor', status: 'active', lastLogin: '2023-06-12 14:50' },
  { id: 10, name: 'Ivy Clark', email: 'ivy.clark@example.com', role: 'Viewer', status: 'inactive', lastLogin: '2023-05-30 15:15' },
  { id: 11, name: 'Jack Martin', email: 'jack.martin@example.com', role: 'Admin', status: 'active', lastLogin: '2023-06-14 09:10' },
  { id: 12, name: 'Kate Wilson', email: 'kate.wilson@example.com', role: 'Editor', status: 'active', lastLogin: '2023-06-13 10:30' },
];

const Users: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredUsers = mockUsers.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.role.toLowerCase().includes(searchLower)
    );
  });

  // Stats calculation
  const totalUsers = mockUsers.length;
  const activeUsers = mockUsers.filter(user => user.status === 'active').length;
  const inactiveUsers = mockUsers.filter(user => user.status === 'inactive').length;
  const adminUsers = mockUsers.filter(user => user.role === 'Admin').length;

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>

      {/* Stats Cards */}
      <Box sx={{ mb: 4 }}>
        <Card>
          <CardContent sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ flex: '1 1 200px', p: 2, borderRadius: 1, bgcolor: 'primary.light', color: 'white' }}>
                <Typography variant="h6">Total Users</Typography>
                <Typography variant="h3">{totalUsers}</Typography>
              </Box>
              <Box sx={{ flex: '1 1 200px', p: 2, borderRadius: 1, bgcolor: 'success.light', color: 'white' }}>
                <Typography variant="h6">Active Users</Typography>
                <Typography variant="h3">{activeUsers}</Typography>
              </Box>
              <Box sx={{ flex: '1 1 200px', p: 2, borderRadius: 1, bgcolor: 'error.light', color: 'white' }}>
                <Typography variant="h6">Inactive Users</Typography>
                <Typography variant="h3">{inactiveUsers}</Typography>
              </Box>
              <Box sx={{ flex: '1 1 200px', p: 2, borderRadius: 1, bgcolor: 'secondary.light', color: 'white' }}>
                <Typography variant="h6">Admin Users</Typography>
                <Typography variant="h3">{adminUsers}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Search and Add */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          label="Search Users"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
        >
          Add User
        </Button>
      </Box>

      {/* Users Table */}
      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                          {user.name.charAt(0)}
                        </Avatar>
                        {user.name}
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.status === 'active' ? 'Active' : 'Inactive'} 
                        color={user.status === 'active' ? 'success' : 'error'} 
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default Users; 