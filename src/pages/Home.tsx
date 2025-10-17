import { Typography, Paper, Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom className="mb-4">
        Welcome to TransFlow
      </Typography>
      <Paper className="p-6 rounded-lg">
        <Typography variant="body1" paragraph>
          TransFlow is a modern, responsive web application built with:
        </Typography>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>React 19 with TypeScript</li>
          <li>Vite for fast development</li>
          <li>Material-UI (MUI) components</li>
          <li>Tailwind CSS for styling</li>
          <li>React Router for navigation</li>
          <li>OpenAPI TypeScript for API client generation</li>
        </ul>
      </Paper>
    </Box>
  );
}
