import { Link } from 'react-router-dom'

import './Navbar.css'

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img className="navbar-img" src="/hexagon.svg" />
      <span className="navbar-img-letter highlighted">M</span>
    </div>
    <div className="app-navigation">
      <Link to="/about"><button className="navigation-button"><span className="highlighted">01.</span> About</button></Link>
      <Link to="/experience"><button className="navigation-button"><span className="highlighted">02.</span> Experience</button></Link>
      <Link to="/projects"><button className="navigation-button"><span className="highlighted">03.</span> Projects</button></Link>
      <Link to="/contact"><button className="navigation-button"><span className="highlighted">04.</span> Contact</button></Link>
      <Link to="/"><button className="resume-button">Resume</button></Link>
    </div>
  </nav>
)