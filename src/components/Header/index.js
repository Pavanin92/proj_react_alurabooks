import Logo from '../logo'
import HeaderIcons from "../HeaderIcons";
import HeaderOptions from '../HeaderOptions'
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}

export default Header;
