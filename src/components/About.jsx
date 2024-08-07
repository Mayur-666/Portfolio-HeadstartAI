import React, { useEffect, useState } from "react";

function About() {
  const designations = [
    "Full Stack Developer",
    "AIML Enthusiast",
    "Coding is ❤︎",
    "❤︎ Anime Fan ❤︎ ",
  ];

  const [post, setPost] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPost((post) => (post + 1) % designations.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
      <div className="container-body">
        <div id="about">
          <div id="photo-part">
            <img src="/assets/avatar.png" alt="prpic" />
          </div>
          <div id="content-part">
            <p className="name">Mayur Sonare</p>
            <p id="post">{designations[post]}</p>
            <div className="links">
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mayur-sonare-6b4b11245/",
                    "blank"
                  )
                }
              >
                <img src="/assets/linkedin.png" alt="linkedin" />
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/Mayur-666", "blank")
                }
              >
                <img src="/assets/github1.png" alt="github" />
              </button>
              <button
                onClick={() =>
                  window.open("https://leetcode.com/u/Mayur_Sonare/", "blank")
                }
              >
                <img src="/assets/leetcode.png" alt="leetcode" />
              </button>
            </div>
          </div>
        </div>
        <p className="line"></p>
        <div className="summary">
            <div>From <span>Pixel </span>To <span>Perfection</span></div>
            <div className="summary-content">
            Hi! I am Mayur Sonare, a Full Stack Developer and AIML enthusiast, with a focus on transforming designs into polished, functional websites. I'm passionate about coding and always look for new ways to improve my skills. In my free time, I enjoy watching anime and exploring new technologies :)
            </div>
        </div>
      </div>
  );
}

export default About;
