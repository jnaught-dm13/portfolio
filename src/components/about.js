import React from "react";

import about from "../assets/images/about/creative.png";
import devmountain from "../assets/images/about/dev-mountain-logo.png";

export default props => {
  return (
    <section id="about">
      <div className="container">
        <h3 className="white-color">Who Am I?</h3>
        <hr className="white-color" />
        <p className="text-faded">
          I've always had a passion for building and creating things. After
          graduating a Computer science course for Hardware and Networking I
          took those skills and worked in the industry for years when I wanted
          to take it to the next level and learn the software side. I took a
          thirteen week bootcamp course for web development.
        </p>
        <div className="row">
          <img
            id="aboutImg"
            className="col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img"
            src={about}
            alt="About me"
          />
        </div>
        <div className="text-faded center-align">
          <em>"Where there's a will, there's a way."</em>
        </div>

        <h4 className="white-color">Background</h4>
        <hr className="white-color sub" />
        <div className="row">
          <div className="col s12 m4">
            <img
              src={devmountain}
              alt="LearningFuze"
              className="bgImg responsive-img"
            />
            <div className="background-text text-faded">
              Completing DevMountain's{" "}
              <em>Full Immersion Web Development Program </em>has paved the road
              for my <strong>software development</strong> career.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
