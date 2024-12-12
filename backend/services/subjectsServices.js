import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data');

// fetches all subjects based on files on data folder
const getSubjects = (req, res) => {
  fs.readdir(dataPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read subjects data' });
    }
    const subjects = files.map((file) => {
      const name = file.replace('.json', '');
      return { name, standard: '12th' };
    });
    res.json(subjects);
  });
};

// fetches single subject json files
const getSubjectByName = (req, res) => {
  const { subject } = req.params;
  const filePath = path.join(dataPath, `${subject}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: `Subject ${subject} not found` });
    }
    res.json(JSON.parse(data));
  });
};

// fetches notes for single subject
const getNotesForSubject = (req, res) => {
  const { subject } = req.params;
  const filePath = path.join(dataPath, `${subject}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: `Subject ${subject} not found` });
    }
    const subjectData = JSON.parse(data);

    const notesCategory = subjectData.categories.filter(
      (category) => category.type === 'Notes'
    );

    if (notesCategory.length === 0) {
      return res
        .status(404)
        .json({ error: 'Notes not found for this subject' });
    }

    res.json(notesCategory[0]);
  });
};

const getQPForSubject = (req, res) => {
  const { subject } = req.params;
  const filePath = path.join(dataPath, `${subject}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).json({ error: `Subject ${subject} not found` });
    }
    const subjectData = JSON.parse(data);

    const QPCategory = subjectData.categories.filter(
      (category) => category.type === 'QP'
    );

    if (QPCategory.length === 0) {
      return res
        .status(404)
        .json({ error: 'Question Papers not found for this subject' });
    }

    res.json(QPCategory[0]);
  });
};

export { getSubjects, getSubjectByName, getNotesForSubject, getQPForSubject };
