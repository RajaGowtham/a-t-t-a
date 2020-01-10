import express from 'express';

import { schooltable } from './code';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  // var output = schooltable();
  var output = 'hello';
  res.send(`<html><body><span>${output}</span></body></html>`);
})

app.listen(port, () => console.log(`Atta app listening on port ${port}!`))
