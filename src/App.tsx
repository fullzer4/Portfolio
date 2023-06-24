import Articles from "./components/articles"
import Blog from "./components/blog"
import Contact from "./components/contact"
import Home from "./components/home"
import Navbar from "./components/navbar"
import Projects from "./components/projects"
import Sep from "./components/sep"

const App = () => {

  return (
    <>
      <Navbar/>
      <Home/>
      <Sep/>
      <Projects/>
      <Blog/>
      <Articles/>
      <Contact/>
    </>
  )
}

export default App
