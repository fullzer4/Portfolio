import { useState } from "react"

const Escola = () => {
  const [visible, setVisible] = useState("unvisible")
  
  const changeState = (cond: string): void => {
    if (cond === "visible"){
      setVisible("unvisible")
    }else{
      setVisible("visible")
    }
  }

  return(
    <>
      <button onClick={() => changeState(visible)}>Escola</button>
      <div className={visible}>
      </div>
    </>
  )
}

export default Escola
