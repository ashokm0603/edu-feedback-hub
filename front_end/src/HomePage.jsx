import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    const collegeData = [
        {
            year: "First Year",
            Semister: ["1-1", "1-2"],
            Branch: ["CSE", "AIML", "DS", "ECE"],
        },
        {
            year: "Second Year",
            Semister: ["2-1", "2-2"],
            Branch: ["CSE", "AIML", "DS", "ECE"],
        },
        {
            year: "Third Year",
            Semister: ["3-1", "3-2"],
            Branch: ["CSE", "AIML", "DS", "ECE"],
        },
        {
            year: "Final Year",
            Semister: ["4-1", "4-2"],
            Branch: ["CSE", "AIML", "DS", "ECE"],
        }
    ];

    const handleBranchClick = (semister, branch) => {

        navigate("/feedback");
        localStorage.setItem("url", `/${semister}${branch}`)
    };

    return (
        <div className="home-container">
            <h1 className="home-title">College Information</h1>
            {collegeData.map((yearData, index) => (
                <div key={index} className="year-container">
                    <h2 className="year-title">{yearData.year}</h2>
                    <div className="semister-container">
                        {yearData.Semister.map((semister, semIndex) => (
                            <div key={semIndex}>
                                <h3 className="semister-title">{semister}</h3>
                                <div className="sections">
                                    {yearData.Branch.map((branch, secIndex) => (
                                        <button
                                            key={secIndex}
                                            className="section-button"
                                            onClick={() => handleBranchClick(semister, branch)}
                                        >
                                            {branch}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
