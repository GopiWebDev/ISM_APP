import express from 'express';
import {
  getSubjects,
  getSubjectByName,
  getNotesForSubject,
  getQPForSubject,
} from '../services/subjectsServices.js';

const subjectsRouter = express.Router();

subjectsRouter.get('/', getSubjects);
subjectsRouter.get('/:subject', getSubjectByName);
subjectsRouter.get('/:subject/notes', getNotesForSubject);
subjectsRouter.get('/:subject/qp', getQPForSubject);

export default subjectsRouter;
