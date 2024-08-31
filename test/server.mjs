import express from 'express';

const app = express();
const port = 8080;

<<<<<<< HEAD
let database = {};

// Route to add two numbers
=======
>>>>>>> 5dc07b9f752006ca6c7eb4e89603d7ca13bfea75
app.get('/addTwoNumbers/:firstNumber/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber);
  const secondNumber = parseInt(req.params.secondNumber);
  const result = firstNumber + secondNumber || null;
<<<<<<< HEAD

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    res.status(400).json({ result: null, statusCode: 400 });
=======
  if (result == null) {
    res.status(400).json({ result: result, statusCode: 400 });
>>>>>>> 5dc07b9f752006ca6c7eb4e89603d7ca13bfea75
  } else {
    res.status(200).json({ result: result, statusCode: 200 });
  }
});

<<<<<<< HEAD
// Route to write to the database
app.post('/writeToDatabase/:key/:value', (req, res) => {
  const { key, value } = req.params;
  database[key] = value;
  res.status(200).json({ message: 'Data written successfully', statusCode: 200 });
});

// Route to read from the database
app.get('/readFromDatabase/:key', (req, res) => {
  const { key } = req.params;
  const value = database[key];

  if (value) {
    res.status(200).json({ value: value, statusCode: 200 });
  } else {
    res.status(404).json({ message: 'Data not found', statusCode: 404 });
  }
});

=======
>>>>>>> 5dc07b9f752006ca6c7eb4e89603d7ca13bfea75
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
