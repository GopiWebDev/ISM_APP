import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import subjectsRouter from './routes/subjectsRoute.js';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('HELLO');
});

app.use('/api/subjects', subjectsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
