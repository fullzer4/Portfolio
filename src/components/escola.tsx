import { useState } from "react";
import "../scss/escola.scss";
import Humanas from "./escola/humanas";
import Linguagens from "./escola/linguagens";
import Matematica from "./escola/matematica";
import Natureza from "./escola/natureza";
import Tecnico from "./escola/tecnico";
import Escolha from "./escola/escolha";

const Escola: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [humanas, setHumanas] = useState(true);
  const [linguagens, setLinguagens] = useState(false)
  const [matematica, setMatematica] = useState(false)
  const [natureza, setNatureza] = useState(false)
  const [tecnico, setTecnico] = useState(false)
  const [escolha, setEscolha] = useState(false)

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

  const showEscolha = () => {
    falseState()
    setEscolha(true)
  }

  return (
    <>
      <button className="show" onClick={changeState}>
        Escola
      </button>
      {visible && <div className="box">
        <div className="selects">
          <button className="select" onClick={() => showHumanas()}>humanas</button>
          <button className="select" onClick={() => showLinguagens()}>linguagens</button>
          <button className="select" onClick={() => showMatematica()}>matematica</button>
          <button className="select" onClick={() => showNatureza()}>natureza</button>
          <button className="select" onClick={() => showTecnico()}>tecnico</button>
          <button className="select" onClick={() => showEscolha()}>escolha</button>
        </div>
        <div>
          {humanas && <Humanas/>}
          {linguagens && <Linguagens/>}
          {matematica && <Matematica/>}
          {natureza && <Natureza/>}
          {tecnico && <Tecnico/>}
          {escolha && <Escolha/>}
        </div>
      </div>}
    </>
  );
};

export default Escola;
