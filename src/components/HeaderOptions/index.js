import { Link } from "react-router-dom";
import styled from "styled-components";

const Option = styled.li`
  font-size: 16px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;
const Options = styled.ul`
  display: flex;
`;

const textOptions = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

function HeaderOptions() {
  return (
    <Options>
      {textOptions.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`} >
          <Option>
            <p>{texto}</p>
          </Option>
        </Link>
      ))}
    </Options>
  );
}

export default HeaderOptions;
