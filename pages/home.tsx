import { Box, Container, Paper, Typography } from '@mui/material';
import React from 'react';
// import QuizList from '@/components/quizzes/QuizList';
// ----------------------------------------------------------------------

export default function Home() {
  return (
    <Paper title='Home' sx={{ m: 4, mb: 16 }} elevation={0}>
      <Container maxWidth='xl' disableGutters>
        <Box p={3}>
          <Typography variant='h4' fontWeight='bold'>
            OpenArt Coding Session #1
          </Typography>
          {/*<QuizList/>*/}
        </Box>
      </Container>
    </Paper>
  );
}
