import express from 'express';

import { Tablecreation } from './tablegenerator';
import { School } from './school';
import { teachersData } from './sampleData';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  var sample = new School("Sample", 6, 8);

  sample.importTeachers(teachersData);

  sample.addClassRoom("I", ['tamil', 'english', 'maths', 'science', 'social']);
  sample.addClassRoom("II", ['tamil', 'english', 'maths', 'science', 'social']);
  sample.addClassRoom("III", ['tamil', 'english', 'maths', 'science', 'social']);
  sample.addClassRoom("IV", ['tamil', 'english', 'maths', 'science', 'social']);
  sample.addClassRoom("V", ['tamil', 'english', 'maths', 'science', 'social']);
  sample.addClassRoom("VI", ['tamil', 'english', 'maths', 'science', 'social']);
  sample.addClassRoom("VII", ['tamil', 'english', 'maths', 'physics', 'social']);
  sample.addClassRoom("VIII", ['tamil', 'english', 'maths', 'social', 'chemistry']);

  sample.start();

  var output = new Tablecreation(sample.workingDays, sample.classRooms);
  res.send(output.generator());
})

app.listen(port, () => console.log(`Atta app listening on port ${port}!`))
