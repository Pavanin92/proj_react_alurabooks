import { livros } from "./newReleaseData";
import { Titulo } from "../Title";
import CardRecomenda from "../CardRecomenda";
import imgLivro from "../../img/livro2.png";
import styled from "styled-components";

const ReleaseContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function NewReleases() {
  return (
    <ReleaseContainer>
      <Titulo cor="#52ABD3" fontSize="36px">
        Últimos Lançamentos
      </Titulo>
      <NewBooksContainer>
        {livros.map((livro) => {
          return <img src={livro.src} alt="capa do livro" />;
        })}
      </NewBooksContainer>
      <CardRecomenda 
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo uma aplicação integrada com a plataforma Google."
        img={imgLivro}
      />
    </ReleaseContainer>
  );
}

export default NewReleases;
