import './style.css';

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function HeaderOptions() {
  return (
    <ul className="opcoes">
      {textOptions.map((texto) => (
        <li className="opcao">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}

export default HeaderOptions;