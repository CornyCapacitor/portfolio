import { useState } from 'react'

import './Projects.css'

type Project = {
  name: string,
  revealed: boolean
}

export const Projects = () => {
  const [projectList, setProjectList] = useState<Project[]>([
    {
      name: "taskingo",
      revealed: false,
    },
    {
      name: "tibia_helper",
      revealed: false,
    },
    {
      name: "cysia_candles",
      revealed: false,
    },
    {
      name: "cookie_clicker_clone",
      revealed: false,
    },
  ])

  const toggleRevealed = (project_name: string) => {
    setProjectList((p) =>
      p.map((project) =>
        project.name === project_name ? { ...project, revealed: !project.revealed } : project
      )
    );
  }

  return (
    <div className="projects">
      <div className={`project-container ${projectList[0].revealed ? 'revealed' : ''}`}>
        <h1 id="taskingo" onClick={(e) => toggleRevealed((e.target as HTMLImageElement).id)}>Taskingo</h1>
        {projectList[0].revealed && (
          <div>
            <span>{projectList[0].name}</span>
          </div>
        )}
      </div>
      <div className={`project-container ${projectList[1].revealed ? 'revealed' : ''}`}>
        <h1 id="tibia_helper" onClick={(e) => toggleRevealed((e.target as HTMLImageElement).id)}>Tibia helper</h1>
        {projectList[1].revealed && (
          <div>
            <span>{projectList[1].name}</span>
          </div>
        )}
      </div>
      <div className={`project-container ${projectList[2].revealed ? 'revealed' : ''}`}>
        <h1 id="cysia_candles" onClick={(e) => toggleRevealed((e.target as HTMLImageElement).id)}>Cysia candles</h1>
        {projectList[2].revealed && (
          <div>
            <span>{projectList[2].name}</span>
          </div>
        )}
      </div>
      <div className={`project-container ${projectList[3].revealed ? 'revealed' : ''}`}>
        <h1 id="cookie_clicker_clone" onClick={(e) => toggleRevealed((e.target as HTMLImageElement).id)}>Cookie Clicker clone</h1>
        {projectList[3].revealed && (
          <div>
            <span>{projectList[3].name}</span>
          </div>
        )}
      </div>
    </div>
  )
}