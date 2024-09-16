import { useState } from 'react'

import './Projects.css'
import { ProjectsData } from './ProjectsData'

type Project = {
  name: string,
  image: string,
  revealed: boolean,
  description: string,
  url: string,
}

export const Projects = () => {
  const [projectList, setProjectList] = useState<Project[]>(ProjectsData)

  const toggleRevealed = (project_name: string) => {
    setProjectList((p) =>
      p.map((project) =>
        project.name === project_name ? { ...project, revealed: !project.revealed } : project
      )
    );
  }

  return (
    <div className="projects">
      {projectList.map((project, index) => (
        <div className={`project-container ${projectList[index].revealed ? 'revealed' : ''}`}>
          <h1 id={project.name} onClick={(e) => toggleRevealed((e.target as HTMLImageElement).id)}>{project.name}</h1>
          {projectList[index].revealed && (
            <div>
              <div className="project-info">
                <div className="project-left-section">
                  <span className="project-description reveal">{project.description}</span>
                </div>
                <div className="project-right-section">
                  <a href={project.url} target="_blank">
                    <img src={project.image} className="project-image reveal" />
                  </a>
                  <span>{project.url}</span>
                  <a href={project.url} target="_blank">
                    <button className="project-button reveal">Visit project's website</button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}