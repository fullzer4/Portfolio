import "../scss/projects.scss"

const Projects: React.FC = () => {

  const openCard = (n: number) => {
    alert(`card ${n}`)
  }

  return (
    <div id="Projects">
      <h2 className="subtitles"> Projects </h2>
      <section className="p-section">
        <div className="card" onClick={() => openCard(1)}>
          <div className="cardDesc">
            <p> AcustticAI </p>
            <p className="desc"> AI plataform for counting and classifying vehicles for acoustic</p>
          </div>
        </div>
        <div className="card" onClick={() => openCard(2)}>
          <div className="cardDesc">
            <p> jsTorch </p>
            <p className="desc"> Nodejs Framework for machine / deep learning using torchlib </p>
          </div>
        </div>
        <div className="card" onClick={() => openCard(3)}>
          <div className="cardDesc">
            <p> PersonalGPT </p>
            <p className="desc"> Offline LLM model for mobile and desktop apps </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
