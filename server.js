const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from MSRA-backend!');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'Backend is live!',
    time: new Date()
  });
});
app.get('/about', (req, res) => {
  res.json({
    project: 'MSRA-backend',
    developer: 'Bassem',
    message: 'This is a simple backend built with Express!',
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
