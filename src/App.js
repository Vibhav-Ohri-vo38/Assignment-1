import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PersonalProfile from "./components/PersonalProfile";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
    const [resumeData, setResumeData] = useState({
        name: "Zh Rimel",
        contact: {
            email: "johndoe@example.com",
            website: "abc.github.io/abc",
            phone: "01234567890"
        },
        profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        workExperience: [
            { title: "Job Title at Company", date: "August 2022 - December 2023", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
            { title: "Job Title 2 at Company 2", date: "August 2020 - December 2021", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
        ],
        skills: ["A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill"],
        education: [
            { degree: "BS in Computer Science", school: "New Jersey Institute of Technology", year: "2018 - 2022" }
        ]
    });

    return (
        <div className="app">
            <Header name={resumeData.name} contact={resumeData.contact} />
            <PersonalProfile profile={resumeData.profile} />
            <WorkExperience experiences={resumeData.workExperience} />
            <Skills skills={resumeData.skills} />
            <Education education={resumeData.education} />
        </div>
    );
}

export default App;

