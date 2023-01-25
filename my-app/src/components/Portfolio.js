import React from "react";
import Project from "./Project";
// added this into page
const projects = [
  {
    id: 0,
    title: "ChauChau",
    languages: "Java",
    packages: "",
    image: " ",
    description: "A terminal code that interacts with users asking about there day, and plays classic games with them!",
    repo: "https://github.com/a1exlin/ChauChau-",
    
  },
  {
    id: 1,
    title: "Professional README Generator",
    languages: "js",
    packages: "inquirer ",
    image: " ",
    description: "Generates a Professional README file for users to use for desired purposes.",
    repo: "https://github.com/a1exlin/Module-9-Challenge",
  },
  
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium"> A Insight of my Portfolio </p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;