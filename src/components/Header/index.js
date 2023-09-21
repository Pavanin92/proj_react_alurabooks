import "./style.css";
import Logo from '../logo'
import HeaderIcons from "../HeaderIcons";
import HeaderOptions from '../HeaderOptions'

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <HeaderOptions />
      <HeaderIcons />
    </header>
  );
}

export default Header;
