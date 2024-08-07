import React from "react";

function Academic() {
  const academic = [
    {
      name: "Institute of Engineering and Science, IPS Academy",
      domain: "BTech (CSIT)",
      percentage: "9.70 CGPA",
      duration: "2021 - Present",
    },
    {
      name: "Gyan Sagar Acadmemy",
      domain: "12th Standard",
      percentage: "95.6%",
      duration: "2020 - 2021",
    },
    {
      name: "Gyan Sagar Academy",
      domain: "10th Standard",
      percentage: "90%",
      duration: "2018 - 2019",
    },
  ];

  return (
    <div className="academic">
      <div>
        <h1>Academics</h1>
        {academic.map((item, i) => (
          <div key={i} className="t academic-card">
            <h3>{item.name}</h3>
            <div>
            <p>{item.domain}</p>
            <p>{item.percentage}</p>
            <p>{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academic;
