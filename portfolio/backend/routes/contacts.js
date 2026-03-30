import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Submit contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

