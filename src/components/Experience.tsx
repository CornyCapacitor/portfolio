import { ReactNode, useState } from 'react';
import { SideSkillsExperience, TechExperience } from './ExperienceData';

import './Experience.css';

type Experience = {
  name: string,
  icon: string,
  description: string,
}

export const Experience = () => {
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null)
  const [selectedSecondary, setSelectedSecondary] = useState<string | null>(null)
  const [techExperienceList] = useState<Experience[]>(TechExperience)
  const [sideSkillsExperienceList] = useState<Experience[]>(SideSkillsExperience)
  const [primaryDescription, setPrimaryDescription] = useState<string>("");
  const [secondaryDescription, setSecondaryDescription] = useState<string>("");

  const selectHandler = (value: string, type: string) => {
    const experienceList = techExperienceList.concat(sideSkillsExperienceList)
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
        {renderSkills(techExperienceList, selectedPrimary, "primary")}
        {selectedPrimary && (
          <div className="description-container">
            <span className="highlighted">{selectedPrimary}</span>
            <span className="revealing">{primaryDescription}</span>
          </div>
        )}
      </section>
      <section>
        <h1 className="highlighted">Side skills</h1>
        {renderSkills(sideSkillsExperienceList, selectedSecondary, "secondary")}
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
          Although I have never been formally employed as a software developer in a traditional company, my curiosity has led me to explore many community-driven projects and open-source repositories to see how the professionals approach coding. For almost two years now, I've been deepening my understanding of TypeScript in my free time, while honing my skills in React for nearly a year and a half. Most of my knowledge has come from books, peers, and the vast resources generously shared on the internet. I have also completed two freelance projects, which gave me hands-on experience working directly with clients. These projects not only sharpened my coding abilities but also pushed me into the role of a UI designer. I had to plan, design, and build the websites entirely on my own, which my clients continue to use today. This experience strengthened my ability to manage both the technical and design aspects of web development.
        </div>
      </section>
    </div>
  )
}