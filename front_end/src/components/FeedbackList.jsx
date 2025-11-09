import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]); // Stores all feedback
  const [searchTerm, setSearchTerm] = useState(""); // Stores user input for search
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://backend-student-feedback.onrender.com/api/feedback")
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching feedback data:", error);
      });
  }, []);

  // Function to handle back navigation
  const handleBack = () => {
    navigate("/");
  };

  // Move searched results to the top
  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    const aMatch =
      a.fname && a.fname.toLowerCase().includes(searchTerm.toLowerCase());
    const bMatch =
      b.fname && b.fname.toLowerCase().includes(searchTerm.toLowerCase());

    if (aMatch && !bMatch) return -1; // Move `a` up if it matches
    if (!aMatch && bMatch) return 1; // Move `b` up if it matches
    return 0; // Keep order otherwise
  });

  return (
    <div className="feedback-list-container">
      <div className="feedback-image-wrapper">
        <img src="image.png" alt="Feedback List" className="responsive-image" />
        <h2>Submitted Feedbacks</h2>
      </div>

      <input
        type="text"
        placeholder="Search by Full Name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      {sortedFeedbacks.length === 0 ? (
        <p>No feedback available</p>
      ) : (
        <div className="feedback-table-wrapper">
          <table border="1" width="100%">
            <thead>
              <tr>
                <th>Month</th>
                <th>Name</th>
                <th>Program</th>
                <th>Year & Semester</th>
                <th>Branch</th>
                <th>Student Type</th>
                <th>Hall Ticket</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {sortedFeedbacks.map((item, index) => (
                <tr key={index}>
                  <td>{item.currentmonth}</td>
                  <td>{item.fname}</td>
                  <td>{item.program}</td>
                  <td>{item.yearSemester}</td>
                  <td>{item.branch}</td>
                  <td>{item.studentType}</td>
                  <td>{item.hallTicket}</td>
                  <td>{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button id="back-btn" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default FeedbackList;
