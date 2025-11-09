const express = require("express");
const Feedback = require("../models/Feedback_2_2_CSE");

const router = express.Router();

// POST feedback
router.post("/", async (req, res) => {
  try {
    const { section, subjectRatings, overallRating, suggestions } = req.body;
    const feedback = new Feedback({
      section,
      subjectRatings,
      overallRating,
      suggestions,
    });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all feedback
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
