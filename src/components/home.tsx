import { NextComponentType } from "next"
import Style from "@/scss/home.module.scss"
import { gsap } from "gsap"

const Home: NextComponentType = () => {

    const titles:any = gsap.utils.toArray('span')
    const tl = gsap.timeline()
    titles.forEach((title:any) => {
        const text:any = new SplitText(title)
        console.log(text)
    })

    return(
        <div className={Style.home}>
            <div className={Style.box}>
                <h1 className={Style.logo}>Fullzer4</h1>
            </div>
            <div className={Style.Textbox}>
                <p>Hi there, my name is Gabriel Pelizzaro and Im a 
                    <div className={Style.Flowbox}>
                        <span>FullStack developer</span>
                        <span>ML and DL enginner</span>
                        <span>Robotics</span>
                    </div>
                </p>
            </div> 
            <div className={Style.boxmouse}>
                <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" className={Style.mouse}>
                    <path id="wheel" className={Style.scroll} d="M123.359,79.775l0,72.843"></path>
                    <path id="mouse" className={Style.borderMouse} d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"/>
                </svg>
            </div> 
        </div>
    )
}

export default Home