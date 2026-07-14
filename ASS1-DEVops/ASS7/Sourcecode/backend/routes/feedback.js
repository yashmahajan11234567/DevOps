const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.course) {
      filter.course = { $regex: req.query.course, $options: 'i' };
    }
    const feedbacks = await Feedback.find(filter).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get feedback', error });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { studentName, course, rating, comments } = req.body;
    const feedback = new Feedback({ studentName, course, rating, comments });
    const saved = await feedback.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Failed to save feedback', error });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: 'Feedback removed' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete feedback', error });
  }
});

module.exports = router;
