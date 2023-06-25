import { useState } from "react";
import "../scss/escola.scss";

const Escola: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const changeState = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button className="show" onClick={changeState}>
        Escola
      </button>
      {visible && <div>Conteúdo da Escola</div>}
    </>
  );
};

export default Escola;