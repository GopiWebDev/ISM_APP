import express from 'express';
import { getSubjects } from '../services/subjectsServices.js';

const subjectsRouter = express.Router();

subjectsRouter.get('/', getSubjects);

export default subjectsRouter;
