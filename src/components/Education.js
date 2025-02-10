import React from "react";

function Education({ education }) {
    return (
        <section className="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className="degree">
                    <p><strong>{edu.degree}</strong>, {edu.school} ({edu.year})</p>
                </div>
            ))}
        </section>
    );
}

export default Education;
