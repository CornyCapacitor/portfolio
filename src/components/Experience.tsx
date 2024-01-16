import { useState } from 'react';
import { ExperienceData } from './ExperienceData';

import './Experience.css';

type Experience = {
  name: string,
  description: string,
}

export const Experience = () => {
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null)
  const [selectedSecondary, setSelectedSecondary] = useState<string | null>(null)
  const [experienceList] = useState<Experience[]>(ExperienceData)
  const [primaryDescription, setPrimaryDescription] = useState<string>("");
  const [secondaryDescription, setSecondaryDescription] = useState<string>("");

  const selectHandler = (value: string, type: string) => {
    const selectedTech = experienceList.find((tech) => tech.name === value);

    if (!selectedTech) {
      return;
    }

    if (type === "primary") {
      if (selectedPrimary === value) {
        setSelectedPrimary(null)
        setPrimaryDescription("");
      } else {
        setSelectedPrimary(value)
        setPrimaryDescription(selectedTech.description)
      }
    }
    if (type === "secondary") {
      if (selectedSecondary === value) {
        setSelectedSecondary(null)
        setSecondaryDescription("");
      } else {
        setSelectedSecondary(value)
        setSecondaryDescription(selectedTech.description)

      }
    }
  }

  return (
    <div className="experience">
      <section>
        <h1 className="highlighted">Tech</h1>
        <div>
          <img src="html-icon.svg" id="HTML" className={selectedPrimary === "HTML" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="css-icon.svg" id="CSS" className={selectedPrimary === "CSS" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="js-icon.svg" id="JavaScript" className={selectedPrimary === "JavaScript" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="ts-icon.svg" id="TypeScript" className={selectedPrimary === "TypeScript" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="react-icon.svg" id="React" className={selectedPrimary === "React" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
        </div>
        {selectedPrimary && (
          <div className="description-container">
            <span className="highlighted">{selectedPrimary}</span>
            <span className="revealing">{primaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1 className="highlighted">Side skills</h1>
        <div className="skills-container">
          <img src="git-icon.svg" id="Git" className={selectedSecondary === "Git" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="github-icon.svg" id="Github" className={selectedSecondary === "Github" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="ai-icon.svg" id="AI" className={selectedSecondary === "AI" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="redux-icon.svg" id="Redux" className={selectedSecondary === "Redux" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="zustand-icon.png" id="Zustand" className={selectedSecondary === "Zustand" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="jotai-icon.png" id="Jotai" className={selectedSecondary === "Jotai" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="axios-icon.png" id="Axios" className={selectedSecondary === "Axios" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="tailwind-icon.svg" id="Tailwind" className={selectedSecondary === "Tailwind" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="styled-components-icon.png" id="Styled Components" className={selectedSecondary === "Styled Components" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="vite-icon.svg" id="Vite" className={selectedSecondary === "Vite" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="slack-icon.svg" id="Slack" className={selectedSecondary === "Slack" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="jira-icon.svg" id="Jira" className={selectedSecondary === "Jira" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="figma-icon.svg" id="Figma" className={selectedSecondary === "Figma" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="trello-icon.svg" id="Trello" className={selectedSecondary === "Trello" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="lodash-icon.svg" id="Lodash" className={selectedSecondary === "Lodash" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
        </div>
        {selectedSecondary && (
          <div className="description-container">
            <span className="highlighted">{selectedSecondary}</span>
            <span className="revealing">{secondaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1 className="highlighted">Commercial experience</h1>
        <div className="commercial-experience">
          While never being employed as a software developer, I've put my interest into many community-based activities, such as advent of code or was lurking through many open repositories to gain information about how big guys do their code. I've been learning magics of TypeScript for almost a year during my free time, and React for almost a half. Almost all of my knowledge comes from books and benevolence of the internet.
        </div>
      </section>
    </div>
  )
}