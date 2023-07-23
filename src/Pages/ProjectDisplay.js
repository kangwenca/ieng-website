import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helpers/ProjectList.js";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>

        <div className="image-container">
            <img src={project.image1} alt="Image 1" />

            {project.image2 && <img src={project.image2} alt="Image 2" />}

            {project.image3 && <img src={project.image3} alt="Image 3" />}
            
            {project.image4 && <img src={project.image4} alt="Image 4" />}

        </div>
        <p>
          {project.description}
        </p>
      </div>
    );
  }
  
  export default ProjectDisplay;