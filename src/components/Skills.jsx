import React from "react";

function Skills() {
  const skillsObj = [
    "/assets/axios.png",
    "/assets/css.png",
    "/assets/exp.png",
    "/assets/express.png",
    "/assets/figma.png",
    "/assets/git.png",
    "/assets/github.png",
    "/assets/github1.png",
    "/assets/html.png",
    "/assets/js.png",
    "/assets/mongodb.png",
    "/assets/mysql.png",
    "/assets/node.png",
    "/assets/Postman.png",
    "/assets/react.png",
    "/assets/reactRouterDom.png",
    "/assets/redux.png",
    "/assets/rrd.png",
    "/assets/tailwindcss.png",
    "/assets/theatre.png",
    "/assets/threeJs.png",
    "/assets/vite.png",
    "/assets/vscode.png",
  ];

  return (
    <div className="skills-container">
        <h1>Skills</h1>
      <div className="skills">
        {skillsObj.map((item, i) => (
          <img className="t" key={i} src={item} alt="skills" />
        ))}
      </div>
    </div>
  );
}

export default Skills;
