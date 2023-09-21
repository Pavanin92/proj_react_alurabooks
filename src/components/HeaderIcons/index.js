import "./style.css";
import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";

const icons = [perfil, sacola];

function HeaderIcons() {
  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className="icon">
          <img src={icon} alt="icon" />
        </li>
      ))}
    </ul>
  );
}

export default HeaderIcons;
