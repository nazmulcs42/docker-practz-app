import express from 'express';
import {json, urlencoded} from 'body-parser';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});