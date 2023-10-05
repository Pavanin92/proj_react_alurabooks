import { livros } from "./newReleaseData";
import styled from "styled-components";

const ReleaseContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
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
      <Titulo>Últimos Lançamentos</Titulo>
      <NewBooksContainer>
        { livros.map((livro) => {
          return <img src={livro.src} alt="capa do livro" />;
        })}
      </NewBooksContainer>
    </ReleaseContainer>
  );
}

export default NewReleases;
