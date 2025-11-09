import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentmonth: "",
    program: "B.Tech",
    fname: "",
    yearSemester: "",
    branch: "",
    studentType: "",
    hallTicket: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://backend-student-feedback.onrender.com/api/feedback",
        formData
      );
      toast.success("Feedback Submitted!");

      setFormData({
        currentmonth: "",
        program: "B.Tech",
        fname: "",
        yearSemester: "",
        branch: "",
        studentType: "",
        hallTicket: "",
        gender: "",
      });
      let url = localStorage.getItem("url")
      navigate(`${url}`);
    } catch (error) {
      toast.error("Error submitting feedback:");
    }
  };

  return (
    <div className="feedback-container">
      <div>
        <img src="image.png" alt="" />
      </div>
      <div className="form-header">
        <h2>RVIT - Student Feedback Form</h2>
        <p>RV INSTITUTE OF TECHNOLOGY</p>
        <p>NAAC 'A' GRADE</p>
      </div>
      <form onSubmit={handleSubmit} id="form-container">
        <div>
          <label htmlFor="">Choose Current Month</label>
          <input
            type="month"
            name="currentmonth"
            value={formData.currentmonth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Program</label>
          <input type="text" name="program" value="B.Tech" readOnly />
        </div>
        <div>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
            placeholder="sai ram"
          />
        </div>
        <div>
          <label>Academic Year & Semester</label>
          <select
            name="yearSemester"
            value={formData.yearSemester}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="I Year B.Tech I Semester">
              I Year B.Tech I Semester
            </option>
            <option value="I Year B.Tech II Semester">
              I Year B.Tech II Semester
            </option>
            <option value="II Year B.Tech I Semester">
              II Year B.Tech I Semester
            </option>
            <option value="II Year B.Tech II Semester">
              II Year B.Tech II Semester
            </option>
            <option value="III Year B.Tech I Semester">
              III Year B.Tech I Semester
            </option>
            <option value="III Year B.Tech II Semester">
              III Year B.Tech II Semester
            </option>
            <option value="IV Year B.Tech I Semester">
              IV Year B.Tech I Semester
            </option>
            <option value="IV Year B.Tech II Semester">
              IV Year B.Tech II Semester
            </option>
          </select>
        </div>
        <div>
          <label>Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="CSE">CSE</option>
            <option value="CSE (AIML)">CSE (AIML)</option>
            <option value="CSE (DS)">CSE (DS)</option>
            <option value="ECE">ECE</option>
          </select>
        </div>
        <div>
          <label>Student Type</label>
          <select
            name="studentType"
            value={formData.studentType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="1st Year B.Tech Student">
              1st Year B.Tech Student
            </option>
            <option value="CRT Student">CRT Student</option>
            <option value="NON-CRT Student">NON-CRT Student</option>
          </select>
        </div>

        <div>
          <label>Hall Ticket Number</label>
          <input
            type="text"
            name="hallTicket"
            value={formData.hallTicket}
            onChange={handleChange}
            required
            placeholder="22HU1A"
          />
        </div>

        <div>
          <label htmlFor="">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">choose gender</option>
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div id="btn-container">
          <button id="btn" type="submit">
            Submit
          </button>
          <input type="reset" value={"clear"} />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default FeedbackForm;
