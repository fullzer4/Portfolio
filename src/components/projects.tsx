import "../scss/projects.scss"

const Projects: React.FC = () => {

  return (
    <div id="Projects">
      <h2 className="subtitles"> Projects </h2>
      <section className="p-section">
        <div className="card">
          <div className="cardDesc">
            <p> AcustticAI </p>
            <p className="desc"> AI plataform for counting and classifying vehicles for acoustic</p>
          </div>
        </div>
        <div className="card">
          <div className="cardDesc">
            <p> jsTorch </p>
            <p className="desc"> Nodejs Framework for machine / deep learning using torchlib </p>
          </div>
        </div>
        <div className="card">
          <div className="cardDesc">
            <p> Date plan </p>
            <p className="desc"> Date organizer app to plan your dates with multiple choices </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
