import "../scss/blog.scss"
import Link from "./icons/link"

const Blog: React.FC = () => {

  return (
    <div id="Blog">
      <h3 className="subtitles">Blog</h3>
      <section className="b-section">
        <a href="">
          <Link />
          <p> Postgres.js the fastest postgres ORM on nodejs? ( Postgres, Node, Typescript, Backend ) - building </p>
        </a>
        <a href="">
          <Link />
          <p> Using Web Streams on Nextjs to process Videos ( Nextjs, Typescript, Frontend ) - building </p>
        </a>
        <a href="">
          <Link />
          <p> How to create and use node add ons using Rust with Neon ( Node, Rust, Backend ) - building </p>
        </a>
        <a href="https://medium.com/@gabrielpelizzaro/how-to-do-a-rust-graphql-api-with-actix-and-juniper-ea255f261c2b">
          <Link />
          <p> How to do a Rust GraphQL API with Actix and Juniper ( Rust, Graphql, Backend ) </p>
        </a>
      </section>
    </div>
  )
}

export default Blog
