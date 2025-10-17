import { Typography, Paper, Box, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box>
      <Typography variant="h4" gutterBottom className="mb-4">
        Settings
      </Typography>
      <Paper className="p-6 rounded-lg">
        <Typography variant="h6" gutterBottom className="mb-4">
          Preferences
        </Typography>
        <Box className="space-y-4">
          <FormControlLabel
            control={
              <Switch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
            }
            label="Enable Notifications"
          />
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
            }
            label="Dark Mode"
          />
        </Box>
      </Paper>
    </Box>
  );
}
