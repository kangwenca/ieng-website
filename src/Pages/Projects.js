import React from 'react'
import ProjectItem from "../Components/ProjectItem";
import {ProjectList} from '../Helpers/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> Industry Client Projects </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image1} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;