import { NextComponentType } from "next"
import Styles from "../scss/navbar.module.scss"
import Link from "next/link"

const Navbar: NextComponentType = () => {
  return(
    <div className={Styles.navbar}>
      <Link href="#Home" className={Styles.item}> Home </Link>
      <Link href="#" className={Styles.item}> About </Link>
      <Link href="#" className={Styles.item}> Projects </Link>
      <Link href="#" className={Styles.item}> Talks </Link>
    </div>
  )
}

export default Navbar
