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

export { getSubjects };
