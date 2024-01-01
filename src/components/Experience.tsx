import { useState } from 'react';
import { ExperienceList } from './ExperienceList';

import './Experience.css';

type Experience = {
  name: string,
  description: string,
}

export const Experience = () => {
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null)
  const [selectedSecondary, setSelectedSecondary] = useState<string | null>(null)
  const [experienceList] = useState<Experience[]>(ExperienceList)
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
        <h1 className="highlighted">Main technologies</h1>
        <div className="languages">
          <img src="html-icon.svg" id="HTML" className={selectedPrimary === "HTML" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="css-icon.svg" id="CSS" className={selectedPrimary === "CSS" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="js-icon.svg" id="JavaScript" className={selectedPrimary === "JavaScript" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="ts-icon.svg" id="TypeScript" className={selectedPrimary === "TypeScript" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="react-icon.svg" id="React" className={selectedPrimary === "React" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
        </div>
        {selectedPrimary && (
          <div className="description-container">
            <span className="highlighted">{selectedPrimary}</span>
            <span>{primaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1 className="highlighted">Worth to mention</h1>
        <div className="additional-skills">
          <img src="git-icon.svg" id="Git" className={selectedSecondary === "Git" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="github-icon.svg" id="Github" className={selectedSecondary === "Github" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="ai-icon.svg" id="AI" className={selectedSecondary === "AI" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
        </div>
        {selectedSecondary && (
          <div className="description-container">
            <span className="highlighted">{selectedSecondary}</span>
            <span>{secondaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1 className="highlighted">Commercial experience</h1>
        <div className="commercial-experience">
          <span>While never being employed as a software developer, I've put my interest into many community-based activities, such as advent of code or was lurking through many open repositories to gain information about how big guys do their code. I've been learning magics of TypeScript for almost a year during my free time, and React for almost a half. Almost all of my knowledge comes from books and benevolence of the internet.</span>
        </div>
      </section>
    </div>
  )
}