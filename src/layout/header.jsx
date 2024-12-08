import { NavLink } from "react-router-dom";
import "./layout.css";

let Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/products">products</NavLink>
      </li>
    </ul>
  );
};

export default Header;
