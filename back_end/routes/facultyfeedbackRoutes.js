const express = require("express");
const Feedback = require("../models/facultyfeedbackSchema");

const router = express.Router();

// Submit feedback
router.post("/submit-feedback", async (req, res) => {
  try {
    const { subjectRatings, overallRating, suggestions } = req.body;

    const newFeedback = new Feedback({
      subjectRatings,
      overallRating,
      suggestions,
    });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve all feedback
router.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
