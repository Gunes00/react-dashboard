import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Divider,
  TextField,
  Button,
  Avatar,
  Switch,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  IconButton,
  Tab,
  Tabs,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import {
  AccountCircle,
  Save,
  Visibility,
  VisibilityOff,
  Security,
  Notifications,
  ColorLens,
  Email
} from '@mui/icons-material';
import { ThemeContext } from '../theme/ThemeProvider';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `settings-tab-${index}`,
    'aria-controls': `settings-tabpanel-${index}`,
  };
}

const Settings: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const { toggleTheme, isDark } = React.useContext(ThemeContext);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>

      <Card elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="settings tabs">
            <Tab icon={<AccountCircle />} label="Profile" {...a11yProps(0)} />
            <Tab icon={<Security />} label="Security" {...a11yProps(1)} />
            <Tab icon={<Notifications />} label="Notifications" {...a11yProps(2)} />
            <Tab icon={<ColorLens />} label="Appearance" {...a11yProps(3)} />
          </Tabs>
        </Box>

        {/* Profile Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ 
              flex: { xs: '1 1 100%', md: '0 0 300px' },
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Avatar
                sx={{ width: 120, height: 120, mb: 2 }}
                alt="User Profile"
                src="/static/images/avatar/1.jpg"
              />
              <Button variant="outlined" color="primary">
                Change Avatar
              </Button>
              <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                Recommended dimensions: 200x200px
              </Typography>
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 0' } }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    defaultValue="John"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 48%' } }}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    defaultValue="Doe"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ flex: '1 1 100%', mt: 1 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue="john.doe@example.com"
                    variant="outlined"
                    type="email"
                  />
                </Box>
                <Box sx={{ flex: '1 1 100%', mt: 1 }}>
                  <TextField
                    fullWidth
                    label="Job Title"
                    defaultValue="Senior Developer"
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ flex: '1 1 100%', mt: 1 }}>
                  <TextField
                    fullWidth
                    label="Bio"
                    defaultValue="I am a software developer with 5+ years of experience in React and TypeScript."
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Box>
                <Box sx={{ flex: '1 1 100%', mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Save />}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>

        {/* Security Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Change Password
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '600px' }}>
            <TextField
              fullWidth
              label="Current Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="New Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Confirm New Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ mt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Save />}
              >
                Update Password
              </Button>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom>
            Two-Factor Authentication
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Enable two-factor authentication"
            />
          </FormGroup>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Secure your account with two-factor authentication. When enabled, you'll be required to enter a code in addition to your password when you sign in.
          </Typography>
        </TabPanel>

        {/* Notifications Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Email Notifications
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText
                primary="Security Alerts"
                secondary="Receive emails for suspicious activities and security alerts"
              />
              <ListItemSecondaryAction>
                <Switch edge="end" defaultChecked />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText
                primary="Account Updates"
                secondary="Receive emails for account updates and changes"
              />
              <ListItemSecondaryAction>
                <Switch edge="end" defaultChecked />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText
                primary="Marketing"
                secondary="Receive emails about new features and promotions"
              />
              <ListItemSecondaryAction>
                <Switch edge="end" />
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom>
            System Notifications
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard Alerts"
                secondary="Show notifications for dashboard updates and alerts"
              />
              <ListItemSecondaryAction>
                <Switch edge="end" defaultChecked />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText
                primary="User Activity"
                secondary="Show notifications for user activity updates"
              />
              <ListItemSecondaryAction>
                <Switch edge="end" defaultChecked />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </TabPanel>

        {/* Appearance Tab */}
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" gutterBottom>
            Theme
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={isDark} onChange={toggleTheme} />}
              label={isDark ? "Dark Mode" : "Light Mode"}
            />
          </FormGroup>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom>
            Language
          </Typography>
          <FormControl fullWidth variant="outlined" sx={{ maxWidth: 300 }}>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              defaultValue="en"
              label="Language"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="de">German</MenuItem>
              <MenuItem value="ja">Japanese</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Save />}
            >
              Save Preferences
            </Button>
          </Box>
        </TabPanel>
      </Card>
    </Box>
  );
};

export default Settings; 