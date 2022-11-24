import React from "react";
import selfie from '../IMG/selfie.png';

function About() {
return (
  <div>
    <p className="content is-medium"> Junior Fullstack Developer Student </p>
    <hr />
    <img className="pic" src={selfie} alt="selfie" />
     

    <p className="About-Me">
        I am Alexander Lin, a Junior Fullstack Developer Student and a United States Marine. In my lesiure, I enjoy listening to music, play call of duty, and workout. I am also a current student at Kennesaw State University majoring in Computer Science. From here, I wish to seek for full time opportunities in Fullstack Development while obtaining a bachelor's in computer science! 
      </p>
    </div>
);
}

export default About;