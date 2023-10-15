import "../scss/blog.scss"
import Link from "./icons/link"

const Blog: React.FC = () => {

  return (
    <div id="Blog">
      <h3 className="subtitles">Blog</h3>
      <section className="b-section">
        <a href="">
          <Link />
          <p> Postgres.js the fastest postgres ORM on nodejs? ( Postgres, Node, Typescript, Backend ) </p>
        </a>
        <a href="">
          <Link />
          <p> Using Web Streams on Nuxtjs to process Videos ( Vue, Typescript, Frontend )  </p>
        </a>
        <a href="">
          <Link />
          <p> How to create and use node add ons using Rust with Neon ( Node, Rust, Backend ) </p>
        </a>
        <a href="">
          <Link />
          <p> How to do a Rust GraphQL API with Actix and Juniper ( Rust, Graphql, Backend ) </p>
        </a>
      </section>
    </div>
  )
}

export default Blog
