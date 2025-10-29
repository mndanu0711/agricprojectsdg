const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Register new vet
app.post('/api/vet/register', (req, res) => {
  const { fullname, email, phone, specialization, experience, location } = req.body;
  db.query(
    'INSERT INTO vets (fullname, email, phone, specialization, experience, location) VALUES (?, ?, ?, ?, ?, ?)',
    [fullname, email, phone, specialization, experience, location],
    (err) => {
      if (err) return res.status(500).send('Error saving vet: ' + err);
      res.send('Vet registered successfully');
    }
  );
});

// Get list of vets
app.get('/api/vets', (req, res) => {
  db.query('SELECT * FROM vets', (err, results) => {
    if (err) return res.status(500).send('Error fetching vets');
    res.json(results);
  });
});

// Login (mock)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.query(
    'SELECT * FROM users WHERE username=? AND password=?',
    [username, password],
    (err, result) => {
      if (err) return res.status(500).send('Error during login');
      if (result.length > 0) res.send('Login successful');
      else res.status(401).send('Invalid credentials');
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
