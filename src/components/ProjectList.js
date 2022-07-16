import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const List = projects.map((elem) => (
    <ProjectItem
      key={elem.id}
      name={elem.name}
      about={elem.about}
      technologies={elem.technologies}
    />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{List}</div>
    </div>
  );
}

export default ProjectList;