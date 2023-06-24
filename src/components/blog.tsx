import "../scss/blog.scss"
import Link from "./icons/link"

const Blog = () => {

  return(
    <div id="Blog">
      <h3 className="subtitles">Blog</h3>
      <section className="b-section">
        <a href="">
          <Link/>
          <p> How to create and use node add ons c++ ( Node, C++, Javascript) </p>
        </a>
      </section>
    </div>
  )
}

export default Blog
