import { useState } from "react";
import "../scss/escola.scss";
import Humanas from "./escola/humanas";
import Linguagens from "./escola/linguagens";
import Matematica from "./escola/matematica";
import Natureza from "./escola/natureza";
import Tecnico from "./escola/tecnico";

const Escola: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [humanas, setHumanas] = useState(true);
  const [linguagens, setLinguagens] = useState(false)
  const [matematica, setMatematica] = useState(false)
  const [natureza, setNatureza] = useState(false)
  const [tecnico, setTecnico] = useState(false)

  const changeState = () => {
    setVisible(!visible);
  };

  const falseState = () => {
    setHumanas(false)
    setLinguagens(false)
    setMatematica(false)
    setNatureza(false)
    setTecnico(false)
  }

  const showHumanas = () => {
    falseState()
    setHumanas(true)
  }

  const showNatureza = () => {
    falseState()
    setNatureza(true)
  }

  const showLinguagens = () => {
    falseState()
    setLinguagens(true)
  }

  const showMatematica = () => {
    falseState()
    setMatematica(true)
  }

  const showTecnico = () => {
    falseState()
    setTecnico(true)
  }

  return (
    <>
      <button className="show" onClick={changeState}>
        Escola
      </button>
      {visible && <div>
        <button onClick={() => showHumanas()}>humanas</button>
        <button onClick={() => showLinguagens()}>linguagens</button>
        <button onClick={() => showMatematica()}>matematica</button>
        <button onClick={() => showNatureza()}>natureza</button>
        <button onClick={() => showTecnico()}>tecnico</button>
        <div>
          {humanas && <Humanas/>}
          {linguagens && <Linguagens/>}
          {matematica && <Matematica/>}
          {natureza && <Natureza/>}
          {tecnico && <Tecnico/>}
        </div>
      </div>}

    </>
  );
};

export default Escola;
