import express from 'express';
// dotenv to acces env files
import dotenv from 'dotenv';
dotenv.config();

// /subject route shows list of all subjects
import subjectsRouter from './routes/subjectsRoute.js';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('HELLO');
});

app.use('/subjects', subjectsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
