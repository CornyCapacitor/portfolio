import './Home.css'
import { SelfWritingText } from './SelfWritingText'

export const Home = () => (
  <div className="home">
    <span className="highlighted greet">Hi, my name is</span>
    <h1>Mateusz Minder.</h1>
    <div className="typewriter">
      <h2>
        <SelfWritingText />
      </h2>
    </div>
    <span className="description">I'm aspiring software engineer specializing in building web applications. All of my experience comes from web learning and coding my own things to challenge myself even further every next project I've made. Currently I'm focused on finding a suitable job to extend my skills and become one of the best front-end developers in future.</span>
    <button className="home-button highlighted">Check out my projects!</button>
  </div>
)