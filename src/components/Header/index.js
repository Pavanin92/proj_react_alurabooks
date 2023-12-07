import Logo from "../logo";
import HeaderIcons from "../HeaderIcons";
import HeaderOptions from "../HeaderOptions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}

export default Header;
