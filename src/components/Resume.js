import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "./public/IMG_0553.jpg"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Technical Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript, Java, node.js, sequelize

            </li>
            
        </ul>
      </div>
    </div>
  );
}

export default Resume;