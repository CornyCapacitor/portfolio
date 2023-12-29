import './About.css'

export const About = () => {
  return (
    <div className="about">
      <section className="section">
        <div>Hi, my name's Mateusz. I'm aspiring software developer, currently focused on polishing my skills and improving the quality of my code. My goal is to be among ambitious people willing to constantly develop, so that in the future I can build with them amazing projects that are an integral part of every person's life. My biggest goal as a future developer is to build applications that help people on a huge scale. I would like to be able to use my potential to improve the lives of many people around the world. </div>
        <img className="my-img" src="/public/placeholder-me.jpg" alt="picture of me" />
      </section>
      <section className="section">
        <img src="/public/clipboard-list.svg" />
        <div style={{ textAlign: "end" }}>About my current commercial experience</div>
      </section>
      <section className="section">
        <div>About my hobbies</div>
        <img src="/public/laptop.svg" />
      </section>
      <section className="section">
        <img src="/public/hourglass.svg" />
        <div style={{ textAlign: "end" }}>About my path</div>
      </section>
      <section className="section">
        <div>Final words about me</div>
        <img src="/public/browser.svg" />
      </section>
    </div >
  )
}