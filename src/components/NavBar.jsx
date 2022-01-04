import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="nav__logo">Logo</div>
      <div className="nav__links">
        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
      </div>
    </nav>
  );
};

export default NavBar;
