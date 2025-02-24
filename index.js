import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import e from 'express';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World, 2025');
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John', email: 'john@gmail.com', address: 'USA' }, 
    { id: 2, name: 'Jane', email: 'jane@gmail.com', address: 'UK' },
    { id: 3, name: 'Doe', email: 'doe@gmail.com', address: 'AUS' },
    { id: 4, name: 'Smith', email: 'smith@gmail.com', address: 'IND' },
    { id: 5, name: 'Tom', email: 'tom@gmail.com', address: 'NZ' },
    { id: 6, name: 'Jerry', email: 'jerry@gmail.com', address: 'SA' },
    { id: 7, name: 'Spike', email: 'spike@gmail.com', address: 'ENG' },
    { id: 8, name: 'Tyke', email: 'tyke@gmail.com', address: 'CAN' },
    { id: 9, name: 'Tuffy', email: 'tuffy@gmail.com', address: 'BRA' },
    { id: 10, name: 'Nibbles', email: 'nibbles@gmail.com', address: 'ARG' },
  ];

  res.send({"status": "success", "message": "Data fetched successfully", "data": users});
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});