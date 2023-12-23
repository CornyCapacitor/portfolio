import './Navbar.css'

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img className="navbar-img" src="/public/hexagon.svg" />
      <span className="navbar-img-letter highlighted">M</span>
    </div>
    <div className="app-navigation">
      <button className="navigation-button"><span className="highlighted">01.</span> About</button>
      <button className="navigation-button"><span className="highlighted">02.</span> Experience</button>
      <button className="navigation-button"><span className="highlighted">03.</span> Projects</button>
      <button className="navigation-button"><span className="highlighted">04.</span> Contact</button>
      <button className="resume-button">Resume</button>
    </div>
  </nav>
)