import React from "react";

function ProjectItem({ name, about, technologies }) {
  const List = technologies.map((elem) => (
    <span key={elem}>{elem}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{List}</div>
    </div>
  );
}

export default ProjectItem;
