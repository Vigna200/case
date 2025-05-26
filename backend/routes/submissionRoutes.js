const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

router.post('/submissions', async (req, res) => {
  try {
    const { productName, productCost } = req.body;
    const newSubmission = new Submission({ productName, productCost });
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save submission' });
  }
});

router.get('/submissions', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

module.exports = router;
