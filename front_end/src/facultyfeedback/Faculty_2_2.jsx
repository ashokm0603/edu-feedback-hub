import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/feedback_2_2_aiml")
            .then((response) => {
                setFeedbacks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching feedback data:", error);
            });
    }, []);

    // Handle Back Navigation
    const handleBack = () => {
        navigate("/");
    };

    // Extracting ratings data for Pie Chart
    const ratingData = [
        { name: "Excellent", value: feedbacks.filter(f => f.overallRating === 5).length },
        { name: "Good", value: feedbacks.filter(f => f.overallRating === 4).length },
        { name: "Fair", value: feedbacks.filter(f => f.overallRating === 3).length },
        { name: "Poor", value: feedbacks.filter(f => f.overallRating === 1).length }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <div className="feedback-list-container">
            <div className="feedback-image-wrapper">
                <img src="image.png" alt="Feedback List" className="responsive-image" />
                <h2>Submitted Feedbacks</h2>
            </div>

            <input
                type="text"
                placeholder="Search by Section..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"
            />

            {feedbacks.length === 0 ? (
                <p>No feedback available</p>
            ) : (
                <div className="feedback-table-wrapper">
                    <table border="1" width="100%">
                        <thead>
                            <tr>
                                <th>Section</th>
                                <th>Overall Rating</th>
                                <th>P&S</th>
                                <th>OT</th>
                                <th>AI</th>
                                <th>ML</th>
                                <th>ADS</th>
                                <th>ML LAB</th>
                                <th>ADS LAB</th>
                                <th>FSD-1/SOC-2 LAB</th>
                                <th>DT&I LAB</th>
                                <th>Suggestions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedbacks.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.section}</td>
                                    <td>{item.overallRating}</td>
                                    <td>{item.subjectRatings?.["P&S"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["OT"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["AI"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["ML"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["ADS"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["ML LAB"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["ADS LAB"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["FSD-1/SOC-2 LAB"] || "N/A"}</td>
                                    <td>{item.subjectRatings?.["DT&I LAB"] || "N/A"}</td>
                                    <td>{item.suggestions}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pie Chart for Ratings */}
            <div className="chart-container">
                <h3>Overall Ratings</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        data={ratingData}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {ratingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

            <button id="back-btn" onClick={handleBack}>
                Back
            </button>
        </div>
    );
};

export default FeedbackList;
