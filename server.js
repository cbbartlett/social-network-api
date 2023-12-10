import express from 'express';
import mongoose from 'mongoose';

// Setup Express
const app = express();

// API routes
import usersRouter from './routes/users';
app.use('/users', usersRouter)

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Local server is listening to port ${port}`);
});
