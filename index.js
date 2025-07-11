const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

//const Contact = require('./models/Contact');

app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

/*
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send({ message: 'Message saved successfully!' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to save message' });
  }
});
*/

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected successfully');
  app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000');
  });
}).catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});
