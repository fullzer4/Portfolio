import "../scss/home.scss"
import Github from "./icons/github"
import Instagram from "./icons/instagram"
import Linkedin from "./icons/linkedin"

const Home = () => {

  return(
    <div id="Home">
      <div className="text-box">
        <h1 className="title">Fullzer4</h1>
        <p className="desc">Hi, I'm Gabriel Pelizzaro (Fullzer4), and I'm 17 years old. I've been coding since I was 9 or 10 years old, and currently, I work as a Fullstack developer and AI & ML engineer.</p>
        <div className="links-box">
          <button className="contactLink">Contact me</button>
          <a href="https://github.com/fullzer4">
            <Github/>
          </a>
          <a href="https://www.instagram.com/yfullzer4.exe/">
            <Instagram/>
          </a>
          <a href="https://www.linkedin.com/in/gabrielpereira-sc/">
            <Linkedin/>
          </a>
        </div>
      </div>
      <div className="img-box">
        <img src="/me.png" loading="lazy"/>
      </div>
    </div>
  )
}

export default Home
