const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  currentmonth: { type: String, required: true },
  program: { type: String, required: true },
  fname: { type: String, required: true },
  yearSemester: { type: String, required: true },
  branch: { type: String, required: true },
  studentType: { type: String, required: true },
  hallTicket: { type: String, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
