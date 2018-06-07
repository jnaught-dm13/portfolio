import React from "react";

import htmlLogo from "../assets/images/skills/html_logo.png";
import cssLogo from "../assets/images/skills/css_logo.png";

import jsLogo from "../assets/images/skills/javascript_logo.png";

import reactLogo from "../assets/images/skills/react-logo.png";
import reduxLogo from "../assets/images/skills/redux.png";

import nodephpLogo from "../assets/images/skills/node_php.png";
import databaseLogo from "../assets/images/skills/database.png";

import agileLogo from "../assets/images/skills/agile_git_mamp.png";
import npmLogo from "../assets/images/skills/vs_code_npm_postman.png";

import responsiveDesign from "../assets/images/skills/responsive-design.png";

export default props => {
  return (
    <section id="skills">
      <h3>Technical Skills</h3>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col s12 l6 skills">
            <img className="col s3 htmlLogo" src={htmlLogo} alt="HTML" />
            <img className="col s3 cssLogo" src={cssLogo} alt="CSS" />
            <div className="col s6 skillsText">
              <strong>HTML5</strong> and <strong>CSS3</strong> are fundamental
              skills for any web developer
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Javascript</strong> an essential developer skill
            </div>
            <img
              className="col s3 pull-l6 jsLogo"
              src={jsLogo}
              alt="Javascript"
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>React's</strong> declaractive component structure combined
              with <strong>Redux's</strong> state management is my favorite
              front end framework
            </div>
            <img
              className="col s3 pull-l6 reactLogo"
              src={reactLogo}
              alt="React"
            />
            <img
              className="col s3 pull-l6 reduxLogo"
              src={reduxLogo}
              alt="Redux"
            />
          </div>
          <div className="col s12 l6 skills" style={{ paddingLeft: "125px" }}>
            <img
              className="col s3 nodephpLogo"
              src={nodephpLogo}
              alt="Node PHP"
            />
            <img
              className="col s3 androidLogo"
              src={databaseLogo}
              alt="database"
            />
            <div className="col s6  skillsText">
              Experience with <strong>CRUD</strong> operations using both the
              industry standard <strong>PHP</strong> with <strong>MySQL</strong>{" "}
              and the emerging <strong>Node.js</strong> with{" "}
              <strong>MongoDB</strong>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6 skills">
            <img
              className="col s3 agileLogo"
              src={agileLogo}
              alt="Agile Git Visual Studio Code"
            />
            <img
              className="col s3 vscodeLogo"
              src={npmLogo}
              alt="NPM Postman MAMP"
            />
            <div className="col s6 skillsText">
              <strong>Git, Visual Studio Code, NPM, Postman, MAMP,</strong> and{" "}
              <strong>Agile</strong> are tools and processes that I develop with
              everyday
            </div>
          </div>

          <div className="col s12 l6 skills">
            <div className="col s6 push-l6 skillsText">
              <strong>Responsive design</strong> using{" "}
              <strong>Flexbox, Bootstrap</strong> and{" "}
              <strong>Material Design</strong>.
            </div>
            <img
              className="col s3 pull-l6 responsiveLogo"
              src={responsiveDesign}
              alt="Responsive Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
