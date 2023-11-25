import { FC } from "react";
import "../../scss/escola.scss";

const Escolha: FC = () => {

  return (
    <>
      <div className="links">
        <a href="https://docs.google.com/document/d/1a1ymabrzbxze7Y3Se1t6_lhTspDbhRi6/edit">Autoria - 1 ( Artigo Cientifico )</a>
        <a href="https://medium.com/@gabrielpelizzaro/how-to-do-a-rust-graphql-api-with-actix-and-juniper-ea255f261c2b">Autoria - 2 ( Post medium sobre rust )</a>
        <a href="">Resolução de Problemas - 1 ( Revista literaria )</a>
        <a href="https://docs.google.com/document/d/1a1ymabrzbxze7Y3Se1t6_lhTspDbhRi6/edit">Resolução de Problemas - 2 ( Artigo Cientifico )</a>
        <a href="">Diagnósticos - 1 (Prova crud SQL - Bruno) </a>
        <a href="">Diagnósticos - 2 (SAEP) </a>
        <a href="">Projetos de aprendizagem - 1 ( Projeto Social FLL )</a>
        <a href="">Projetos de aprendizagem - 2 ( Champ Robot )</a>
        <a href="https://docs.google.com/document/d/1a1ymabrzbxze7Y3Se1t6_lhTspDbhRi6/edit">Projetos de aprendizagem - 3 ( Artigo Cientifico )</a>
        <a href="https://github.com/SenaiFlorianopolisResearchTeam">Atividades Orientadas (Iniciacao Cientifica)</a>
      </div>
    </>
  );
};

export default Escolha;
