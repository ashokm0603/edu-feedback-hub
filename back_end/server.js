const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const feedbackRoutes = require("./routes/feedbackRoutes");
const facultyfeedbackRoutes = require("./routes/facultyfeedbackRoutes");
const feedback_2_2_aiml = require("./routes/feeback_2_2_AIML_Routes");
const feedback_2_2_cse=require("./routes/feedback_2_2_CSE_Routes")
const feedback_2_2_ds=require("./routes/feedback_2_2_DS_Routes")
const feedback_2_2_ece=require("./routes/feedback_2_2_ECE_Routes")
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/feedback", feedbackRoutes);
app.use("/api/facultyfeedback", facultyfeedbackRoutes);
app.use("/api/feedback_2_2_aiml", feedback_2_2_aiml);
app.use("/api/feedback_2_2_cse",feedback_2_2_cse)
app.use("/api/feedback_2_2_ds",feedback_2_2_ds)
app.use("/api/feedback_2_2_ece",feedback_2_2_ece)
// Correct MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Avoid infinite waiting
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
