import { useState } from 'react';
import './Experience.css';

export const Experience = () => {
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null)
  const [selectedSecondary, setSelectedSecondary] = useState<string | null>(null)

  const selectHandler = (value: string, type: string) => {
    if (type === "primary") {
      if (selectedPrimary === value) {
        setSelectedPrimary(null)
      } else {
        setSelectedPrimary(value)
      }
    }
    if (type === "secondary") {
      if (selectedSecondary === value) {
        setSelectedSecondary(null)
      } else {
        setSelectedSecondary(value)
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
            {selectedPrimary}
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
            {selectedSecondary}
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