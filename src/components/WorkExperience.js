import React from "react";

function WorkExperience({ experiences }) {
    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            {experiences.map((job, index) => (
                <div key={index} className="job">
                    <p><strong>{job.title}</strong> ({job.date})</p>
                    <p>{job.description}</p>
                </div>
            ))}
        </section>
    );
}

export default WorkExperience;
