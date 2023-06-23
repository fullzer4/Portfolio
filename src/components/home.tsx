import "../scss/home.scss"
import Github from "./icons/github"
import Instagram from "./icons/instagram"
import Linkedin from "./icons/linkedin"

const Home = () => {

  return(
    <div id="Home">
      <div className="text-box">
        <h1 className="title">Fullzer4</h1>
        <p className="desc">Hi im Gabriel pelizzaro (Fullzer4) and i have 17 years and i code since my 9/10 years, now i work as a Fullstack developer / AI & ML enginner</p>
        <div className="links-box">
          <button className="contactLink">Contact me</button>
          <Github/>
          <Instagram/>
          <Linkedin/>
        </div>
      </div>
      <div className="img-box">
        <img src="../../public/test.jpg"/>
      </div>
    </div>
  )
}

export default Home
