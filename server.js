const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, 'public');

app.use(express.static(publicDirectory));

app.get('/status', (req, res) => {
  res.json({
    status: 'Backend is live!',
    clinic: 'Dr. Ashraf Fakhry Dental Clinic',
    time: new Date()
  });
});

app.get('/about', (req, res) => {
  res.json({
    project: 'Dr. Ashraf Fakhry Dental Clinic Website',
    doctor: 'Dr. Ashraf Fakhry',
    specialty: 'Consultant in Dental Implantology',
    location: 'Hussain Bek Street, 4th Floor, above Saraya Pharmacy, Mansoura, Egypt',
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
