import React, { useState } from "react";

// Star rating component
const StarRating = ({ rating, setRating, maxStars = 5 }) => {
  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className="star"
            onClick={() => setRating(starValue)}
            style={{ cursor: "pointer" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill={starValue <= rating ? "#ffd700" : "#ddd"}
              style={
                starValue <= rating ? { boxShadow: "5px 5px 5px black" } : {}
              }
            >
              <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 16l-6.18 3.02L7 12.14 2 7.27l6.91-1.01L12 0z" />
            </svg>
          </span>
        );
      })}
    </div>
  );
};

const FirstYear_1_1_ECE = () => {
  const subjects = [
    "LINEAR ALGEBRA & CALCULUS",
    "BASIC ELECTRICAL & ELECTRONICS ENGINEERING",
    "ENGINEERING PHYSICS",
    "COMPUTER PROGRAMMING",
    "ENGINEERING GRAPHICS",
    "CP LAB",
    "BEEE LAB",
    "EG LAB",
    "PHYSICS LAB",
  ];

  const ratings = ["Excellent", "Very Good", "Good", "Fair", "Poor"];

  // State management
  const [subjectRatings, setSubjectRatings] = useState({});
  const [overallRating, setOverallRating] = useState(0);
  const [suggestions, setSuggestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [section, setSection] = useState("");


  // Handle subject rating change
  const handleSubjectRating = (subject, rating) => {
    setSubjectRatings((prev) => ({
      ...prev,
      [subject]: rating,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    // Validate form
    if (!section) {
      setError("Please select a section.");
      setLoading(false);
      return;
    }

    if (Object.keys(subjectRatings).length !== subjects.length) {
      setError("Please rate all subjects.");
      setLoading(false);
      return;
    }

    const feedbackData = {
      section,
      subjectRatings,
      overallRating,
      suggestions,
    };

    console.log("Submitting Data:", feedbackData); // Debugging

    try {
      const response = await fetch("http://localhost:5000/api/feedback_1_1_ece", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log("Server Response:", responseData); // Debugging

      setSuccessMessage("Feedback submitted successfully!");
      alert("Feedback submitted successfully!")
      handleClear();
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "An error occurred while submitting feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Clear form
  const handleClear = () => {
    setSubjectRatings({});
    setOverallRating(0);
    setSuggestions("");
    setSection("");
  };
  return (
    <div className="form-container">
      <div>
        <img src="image.png" alt="" />
      </div>
      <div className="form-header">
        <h2>RVIT - Student Feedback Form</h2>
      </div>
      <div className="form-header2">
        <p>
          Dear 1-1 ECE Students, Please provide your Feedback by giving
          rating(on scale of Excellent to Poor) for each Subject.
        </p>
        <ul>
          <li>
            <span>*Note:</span> The Information Provided by you will be
            <span> Confidential</span>.
          </li>
        </ul>
      </div>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
      <label htmlFor="sect">Choose Section</label>
        <select id="sect" value={section} onChange={(e) => setSection(e.target.value)}>
          <option value="">Select Section</option>
          <option value="ECE">ECE</option>
        </select>

        {/* Subject Ratings Table */}
        <table className="rating-table">
          <thead>
            <tr>
              <th>Subject</th>
              {ratings.map((rating) => (
                <th key={rating}>{rating}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <>
                <tr key={subject} style={{ marginTop: "10px" }}>
                  <td>{subject}</td>
                  {ratings.map((rating) => (
                    <td key={`${subject}-${rating}`}>
                      <input
                        type="radio"
                        className="radio-input"
                        name={subject}
                        checked={subjectRatings[subject] === rating}
                        onChange={() => handleSubjectRating(subject, rating)}
                      />
                    </td>
                  ))}
                </tr>
                <tr></tr>
              </>
            ))}
          </tbody>
        </table>
        {/* Overall Experience */}
        <div className="overall-rating">
          <h2>Overall Academic Experience</h2>
          <div className="rating-scale">
            <StarRating
              rating={overallRating}
              setRating={setOverallRating}
              maxStars={5}
            />
          </div>
        </div>

        {/* Suggestions */}
        <div className="suggestions">
          <h2>Suggestions/Recommendations</h2>
          <textarea
            className="suggestions-box"
            value={suggestions}
            placeholder="Your Answer...."
            onChange={(e) => setSuggestions(e.target.value)}
          />
        </div>

        {/* Form Buttons */}
        <div className="form-buttons">
        <button type="button" className="clear-btn" onClick={handleClear} disabled={loading}>
        Clear Form
          </button>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstYear_1_1_ECE;
