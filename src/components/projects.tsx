import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "../scss/projects.scss"

const Projects: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const openCard = (n: number) => {
    setSelectedCard(n);
  }

  const closeCard = () => {
    setSelectedCard(null);
  }

  const renderCardDetailsPortal = () => {
    if (selectedCard !== null) {
      switch (selectedCard) {
        case 1:
          return ReactDOM.createPortal(
            <div id="details">
              <section className="content">
                <div className="links">
                  <a href="http://acustticai.com/" target="_blank">Website</a>
                  <a href="https://github.com/SenaiFlorianopolisResearchTeam/AcustticAI" target="_blank">Repository</a>
                  <a href="" target="_blank">Article</a>
                </div>
                <div className="about">
                  <p> Technologies </p>
                  <div>
                    <p> Typescript, React, Next.js, zod, Fastify, python, pyTorch, Flask and Postgres </p>
                  </div>
                  <p> Purpose </p>
                  <div>
                    <p> Facilitating the extraction of analytical data for road acoustics, easing the scientific realm of acoustics, and assisting researchers with artificial intelligence. </p>
                  </div>
                </div>
                <button onClick={() => closeCard()}>Close</button>
              </section>
            </div>,
            document.getElementById('root') as HTMLElement
          );
        case 2:
          return ReactDOM.createPortal(
            <div id="details">
              <section className="content">
                <div className="links">
                  <a href="" target='_blank'> Docs </a>
                  <a href="" target='_blank'> Repository </a>
                  <a href="" target='_blank'> Linkedin </a>
                </div>
                <div className="about">
                  <p> Technologies </p>
                  <div>
                    <p> Node, Javascript, Typescript, C++, pyTorch, LibTorch </p>
                  </div>
                  <p> Purpose </p>
                  <div>
                    <p> This framework incorporates LibTorch bindings, allowing PyTorch models to run seamlessly in web environments without the need for conversions. The inspiration for this project arose from numerous conversations with AI developers during IT events. By utilizing Node Addons in C++ for LibTorch binding, jsTorch achieves exceptional efficiency. Moreover, it features a method for Just-In-Time (JIT) compilation of LibTorch with your AI model, resulting in optimal performance and reduced overhead. </p>
                  </div>
                </div>
                <button onClick={() => closeCard()}> Close </button>
              </section>
            </div>,
            document.getElementById('root') as HTMLElement
          )
        case 3:
          return ReactDOM.createPortal(
            <div id="details">
              <section className="content">
                <div className="links">
                  <a href="" target='_blank'> Website </a>
                  <a href="" target='_blank'> Repository </a>
                  <a href="" target='_blank'> Download </a>
                </div>
                <div className="about">
                  <p> Technologies </p>
                  <div>
                    <p> Rust, C++, React, React-Native, Typescript, Tauri, LLM </p>
                  </div>
                  <p> Purpose </p>
                  <div>
                    <p> Innovative app that empowers users by running large language models offline directly on their devices.  </p>
                  </div>
                </div>
                <button onClick={() => closeCard()}> Close </button>
              </section>
            </div>,
            document.getElementById('root') as HTMLElement
          )
      }
    }
    return null;
  }

  return (
    <>
      <div id="Projects">
        <h2 className="subtitles"> Projects </h2>
        <section className="p-section">
          <div className="card" onClick={() => openCard(1)}>
            <div className="cardDesc">
              <p> AcustticAI </p>
              <p className="desc"> AI platform for counting and classifying vehicles for acoustic</p>
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
      {renderCardDetailsPortal()}
    </>
  )
}

export default Projects;

