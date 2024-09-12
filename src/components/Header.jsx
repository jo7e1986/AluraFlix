import { Link } from "react-router-dom";
import logo from "/alura-flix-logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between p-5 text-white bg-black border-b border-b-blue-500">
      <Link to="/">
        <img src={logo} alt="alura flix logo" />
      </Link>
      <nav className="text-lg sm:text-xl">
        <ul>
          <li>
            <Link
              to="/nuevo-video"
              className="px-4 py-2 transition-colors border rounded hover:bg-blue-500"
            >
              Nuevo Video
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
