import express from 'express';

const app = express();
const port = 8080;

app.get('/addTwoNumbers/:firstNumber/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber);
  const secondNumber = parseInt(req.params.secondNumber);
  const result = firstNumber + secondNumber || null;
  if (result == null) {
    res.status(400).json({ result: result, statusCode: 400 });
  } else {
    res.status(200).json({ result: result, statusCode: 200 });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
