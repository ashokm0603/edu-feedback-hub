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

const ThirdYear_3_2_AIML = () => {
  const subjects = [
    "BDA",
    "CN",
    "DAA",
    "SPM",
    "BE",
    "CN LAB",
    "DL LAB",
    "SOC4 LAB",
  ];
  const labsubjects = ["SOC4 LAB","CN LAB","BDA LAB","DL LAB" ];
  const ratings = ["Excellent", "Very Good", "Good", "Fair", "Poor"];
  const labratings = [
    "Experiments explained during Lab?",
    "Experiments Executed in Lab?",
    "Observation and Record corrected?",
  ];
  // State management
  const [subjectRatings, setSubjectRatings] = useState({});
  const [labSubjectRatings, setLabSubjectRatings] = useState({});
  const [overallRating, setOverallRating] = useState(0);
  const [suggestions, setSuggestions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // Handle subject rating change
  const handleSubjectRating = (subject, rating) => {
    setSubjectRatings((prev) => ({
      ...prev,
      [subject]: rating,
    }));
  };
    // Handle lab subject rating change
    const handleLabSubjectRating = (subject, rating) => {
      setLabSubjectRatings((prev) => {
        const currentRatings = prev[subject] || [];
        return {
          ...prev,
          [subject]: currentRatings.includes(rating)
            ? currentRatings.filter((r) => r !== rating)
            : [...currentRatings, rating],
        };
      });
    };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    const feedbackData = {
      subjectRatings,
      labSubjectRatings,
      overallRating,
      suggestions,
    };

    console.log("Submitting Data:", feedbackData);

    try {
      const response = await fetch("http://localhost:5000/api/feedback_3_2_aiml", {
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
      console.log("Server Response:", responseData);
      
      setSuccessMessage("Feedback submitted successfully!");
      alert("Feedback submitted successfully!");
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
    setLabSubjectRatings({});
    setOverallRating(0);
    setSuggestions("");
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
          Dear 3-2 CSM Students, Please provide your Feedback by giving
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
                {/* lab subjects  */}
                <table className="rating-table">
          <thead>
            <tr>
              <th> Lab Subject</th>
              {labratings.map((rating) => (
                <th key={rating}>{rating}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labsubjects.map((subject) => (
              <>
                <tr key={subject} style={{ marginTop: "10px" }}>
                  <td>{subject}</td>
                  {labratings.map((rating) => (
                    <td key={`${subject}-${rating}`}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        name={`${subject}-${rating}`}
                        checked={
                          labSubjectRatings[subject]?.includes(rating) || false
                        }
                        onChange={() => handleLabSubjectRating(subject, rating)}
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
          <button type="button" className="clear-btn" onClick={handleClear} disabled={loading}>Clear Form</button>
          <button type="submit" className="submit-btn" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default ThirdYear_3_2_AIML;
