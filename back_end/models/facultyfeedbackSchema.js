const mongoose = require("mongoose");

const FacultyFeedbackSchema = new mongoose.Schema({
  subjectRatings: Object,
  overallRating: Number,
  suggestions: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FacultyFeedbackSchema", FacultyFeedbackSchema);
