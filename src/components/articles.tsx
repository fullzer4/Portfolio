import "../scss/articles.scss"
import Link from "./icons/link"

const Articles: React.FC = () => {

  return (
    <div id="Articles">
      <h3 className="subtitles">Articles</h3>
      <section className="a-section">
        <a href="https://github.com/fullzer4/AcustticAI">
          <Link />
          <p> AI plataform for counting and classifying cars ( Next, React, Typescript, Tensorflow, Python ) </p>
        </a>
      </section>
    </div>
  )
}

export default Articles
