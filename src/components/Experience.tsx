import { ReactNode, useState } from 'react';
import { ExperienceData } from './ExperienceData';

import './Experience.css';

type Experience = {
  name: string,
  icon: string,
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

  const renderSkills = (skills: Experience[], selected: string | null, type: string): ReactNode => {
    return (
      <div className="skills-container">
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={skill.icon}
            id={skill.name}
            className={selected === skill.name ? "selected" : ""}
            onClick={() => selectHandler(skill.name, type)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="experience">
      <section>
        <h1 className="highlighted">Tech</h1>
        {renderSkills(experienceList.slice(0, 6), selectedPrimary, "primary")}
        {selectedPrimary && (
          <div className="description-container">
            <span className="highlighted">{selectedPrimary}</span>
            <span className="revealing">{primaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1 className="highlighted">Side skills</h1>
        {renderSkills(experienceList.slice(6), selectedSecondary, "secondary")}
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