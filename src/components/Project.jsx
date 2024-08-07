import React, { useState } from "react";

function Project() {
  const project = [
    {
      img: "/assets/project1.png",
      link: "https://3d-website-mayur.netlify.app",
      name: "3D Website",
    },

    {
      img: "/assets/project5.png",
      link: "https://aim-and-shoot-may.netlify.app/",
      name: "Aim and Shoot Game",
    },

    {
      img: "/assets/project4.png",
      link: "https://3d-website-mayur-1.netlify.app/",
      name: "3D WebGL Website",
    },

    {
      img: "/assets/project3.png",
      link: "https://memory-game-939545.netlify.app/",
      name: "Memory Game",
    },
    {
      img: "/assets/project2.png",
      link: "https://github.com/Mayur-666/Computer_Vision/blob/main/Project_Heart_Disease_Prediction.ipynb",
      name: "Heart Disease ML Model",
    },

    {
      img: "/assets/project6.png",
      link: "https://weather-mayur-app.netlify.app/",
      name: "Weather App",
    },

    { img: "/assets/project0.jpg", link: null, name: "Conquest" },
  ];
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="project-container">
        {project.map((item, i) => (
          <ProjectCard key={i} item={item} i={i}/>
        ))}
      </div>
    </div>
  );
}

const ProjectCard = React.memo(({item, i}) => {
  const [index, setIndex] = useState(null);
  return (
    <div
      onMouseEnter={() => setIndex(i)}
      onMouseLeave={() => setIndex(null)}
      className="project-card"
      onClick={() => item.link && window.open(item.link, "blank")}
    >
      <img className={i == index ? "hidden" : "flex"} src={item.img} />
      <div className={i != index ? "hidden" : "flex"}>
        <h4>{item.name}</h4>
      </div>
    </div>
  );
});

export default Project;
