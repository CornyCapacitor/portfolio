import './Contact.css'

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me via:</h1>
      <div className="contact-sources">
        <a href="https://github.com/HornyCapacitor">
          <img style={{ backgroundColor: "transparent" }} src="github-icon.svg" className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mateusz-minder-b19303257/">
          <img src="linkedin-icon.svg" className="contact-icon" />
        </a>
        <a href="https://www.facebook.com/ElHombreFenomeno/">
          <img src="facebook-icon.svg" className="contact-icon" />
        </a>
        <a href="mateusz-minder-cv.pdf" download="mateusz-minder-cv.pdf">
          <img src="cv-file-icon.svg" className="contact-icon" />
        </a>
      </div>
    </div>
  )
}