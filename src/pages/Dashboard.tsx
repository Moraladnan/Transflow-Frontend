import { Typography, Paper, Box, Stack } from '@mui/material';

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom className="mb-4">
        Dashboard
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        sx={{ flexWrap: 'wrap' }}
      >
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)', lg: '1 1 calc(33.333% - 16px)' } }}>
          <Paper className="p-6 rounded-lg">
            <Typography variant="h6" gutterBottom>
              Total Users
            </Typography>
            <Typography variant="h3" className="text-primary">
              1,234
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)', lg: '1 1 calc(33.333% - 16px)' } }}>
          <Paper className="p-6 rounded-lg">
            <Typography variant="h6" gutterBottom>
              Active Sessions
            </Typography>
            <Typography variant="h3" className="text-primary">
              567
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 calc(50% - 12px)', lg: '1 1 calc(33.333% - 16px)' } }}>
          <Paper className="p-6 rounded-lg">
            <Typography variant="h6" gutterBottom>
              Total Transactions
            </Typography>
            <Typography variant="h3" className="text-primary">
              8,901
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
}
