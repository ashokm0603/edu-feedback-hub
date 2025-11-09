import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import ThirdYear_3_2_AIML from "./components/ThirdYear/ThirdYear_3_2_AIML";
import ThirdYear_3_2_DS from "./components/ThirdYear/ThirdYear_3_2_DS";
import ThirdYear_3_2_ECE from "./components/ThirdYear/ThirdYear_3_2_ECE";
import ThirdYear_3_2_CSE from "./components/ThirdYear/ThirdYear_3_2_CSE";
import ThirdYear_3_1_CSE from "./components/ThirdYear/ThirdYear_3_1_CSE";
import ThirdYear_3_1_AIML from "./components/ThirdYear/ThirdYear_3_1_AIML";
import ThirdYear_3_1_ECE from "./components/ThirdYear/ThirdYear_3_1_ECE";
import ThirdYear_3_1_DS from "./components/ThirdYear/ThirdYear_3_1_DS";
import SecondYear_2_1_AIML from "./components/SecondYear/SecondYear_2_1_AIML";
import SecondYear_2_1_CSE from "./components/SecondYear/SecondYear_2_1_CSE";
import SecondYear_2_1_DS from "./components/SecondYear/SecondYear_2_1_DS";
import SecondYear_2_1_ECE from "./components/SecondYear/SecondYear_2_1_ECE";
import SecondYear_2_2_AIML from "./components/SecondYear/SecondYear_2_2_AIML";
import SecondYear_2_2_CSE from "./components/SecondYear/SecondYear_2_2_CSE";
import SecondYear_2_2_DS from "./components/SecondYear/SecondYear_2_2_DS";
import SecondYear_2_2_ECE from "./components/SecondYear/SecondYear_2_2_ECE";
import FirstYear_1_1_AIML from "./components/FirstYear/FirstYear_1_1_AIML";
import FirstYear_1_1_DS from "./components/FirstYear/FirstYear_1_1_DS";
import FirstYear_1_1_CSE from "./components/FirstYear/FirstYear_1_1_CSE";
import FirstYear_1_1_ECE from "./components/FirstYear/FirstYear_1_1_ECE";
import FirstYear_1_2_CSE from "./components/FirstYear/FirstYear_1_2_CSE";
import FirstYear_1_2_AIML from "./components/FirstYear/FirstYear_1_2_AIML";
import FirstYear_1_2_DS from "./components/FirstYear/FirstYear_1_2_DS";

import FourthYear_4_1_CSE from "./components/FourthYear/FourthYear_4_1_CSE";
import FourthYear_4_1_DS from "./components/FourthYear/FourthYear_4_1_DS";
import FourthYear_4_1_AIML from "./components/FourthYear/FourthYear_4_1_AIML";
import FourthYear_4_1_ECE from "./components/FourthYear/FourthYear_4_1_ECE";
import FirstYear_1_2_ECE from "./components/FirstYear/FirstYear_1_2_ECE";
import HomePage from "./HomePage";
import Faculty_2_2 from "./facultyfeedback/Faculty_2_2";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/get-feedback" element={<FeedbackList />} />
          <Route path="/1-1AIML" element={<FirstYear_1_1_AIML />} />
          <Route path="/1-1DS" element={<FirstYear_1_1_DS />} />
          <Route path="/1-1CSE" element={<FirstYear_1_1_CSE />} />
          <Route path="/1-1ECE" element={<FirstYear_1_1_ECE />} />
          <Route path="/1-2CSE" element={<FirstYear_1_2_CSE />} />
          <Route path="/1-2AIML" element={<FirstYear_1_2_AIML />} />
          <Route path="/1-2DS" element={<FirstYear_1_2_DS />} />
          <Route path="/1-2ECE" element={<FirstYear_1_2_ECE />} />
          <Route path="/2-1AIML" element={<SecondYear_2_1_AIML />} />
          <Route path="/2-1CSE" element={<SecondYear_2_1_CSE />} />
          <Route path="/2-1DS" element={<SecondYear_2_1_DS />} />
          <Route path="/2-1ECE" element={<SecondYear_2_1_ECE />} />
          <Route path="/2-2AIML" element={<SecondYear_2_2_AIML />} />
          <Route path="/2-2CSE" element={<SecondYear_2_2_CSE />} />
          <Route path="/2-2DS" element={<SecondYear_2_2_DS />} />
          <Route path="/2-2ECE" element={<SecondYear_2_2_ECE />} />
          <Route path="/3-1CSE" element={<ThirdYear_3_1_CSE />} />
          <Route path="/3-1AIML" element={<ThirdYear_3_1_AIML />} />
          <Route path="/3-1DS" element={<ThirdYear_3_1_DS />} />
          <Route path="/3-1ECE" element={<ThirdYear_3_1_ECE />} />
          <Route path="/3-2CSE" element={<ThirdYear_3_2_CSE />} />
          <Route path="/3-2AIML" element={<ThirdYear_3_2_AIML />} />
          <Route path="/3-2DS" element={<ThirdYear_3_2_DS />} />
          <Route path="/3-2ECE" element={<ThirdYear_3_2_ECE />} />
          <Route path="/4-1CSE" element={<FourthYear_4_1_CSE />} />
          <Route path="/4-1AIML" element={<FourthYear_4_1_AIML />} />
          <Route path="/4-1DS" element={<FourthYear_4_1_DS />} />
          <Route path="/4-1ECE" element={<FourthYear_4_1_ECE />} />
          <Route path="/2-2Faculty-feedback" element={<Faculty_2_2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
