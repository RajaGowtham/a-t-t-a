import express from 'express';

import { Tablecreation } from './tablegenerator';
import { School } from './school';
import { teachersData } from './sampleData';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  var sample = new School("Sample", 6, 8);

  sample.importTeachers(teachersData);

  sample.addClassRoom("I");
  sample.addClassRoom("II");
  sample.addClassRoom("III");
  sample.addClassRoom("IV");
  sample.addClassRoom("V");
  sample.addClassRoom("VI");
  sample.addClassRoom("VII");
  sample.addClassRoom("VIII");

  sample.start();
  
  var output = new Tablecreation(sample.workingDays, sample.classRooms);
  res.send(output.generator());
})

app.listen(port, () => console.log(`Atta app listening on port ${port}!`))
