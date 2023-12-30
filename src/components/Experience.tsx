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
        <h1>Main technologies</h1>
        <div className="languages">
          <img src="html-icon.svg" id="html" className={selectedPrimary === "html" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="css-icon.svg" id="css" className={selectedPrimary === "css" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="js-icon.svg" id="js" className={selectedPrimary === "js" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="ts-icon.svg" id="ts" className={selectedPrimary === "ts" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
          <img src="react-icon.svg" id="react" className={selectedPrimary === "react" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "primary")} />
        </div>
        {selectedPrimary && (
          <div>
            <span>{selectedPrimary}</span>
            <span>{primaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1>Worth to mention</h1>
        <div className="additional-skills">
          <img src="git-icon.svg" id="git" className={selectedSecondary === "git" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="github-icon.svg" id="github" className={selectedSecondary === "github" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="npm-icon.svg" id="npm" className={selectedSecondary === "npm" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="vite-icon.svg" id="vite" className={selectedSecondary === "vite" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
          <img src="ai-icon.svg" id="ai" className={selectedSecondary === "ai" ? "selected" : ""} onClick={(e) => selectHandler((e.target as HTMLImageElement).id, "secondary")} />
        </div>
        {selectedSecondary && (
          <div>
            <span>{selectedSecondary}</span>
            <span>{secondaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1>Commercial experience</h1>
        <div className="commercial-experience">
          <span>Almost 1 year of self-learning</span>
        </div>
      </section>
    </div>
  )
}