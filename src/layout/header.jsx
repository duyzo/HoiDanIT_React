import { Link } from 'react-router-dom';
import './layout.css'

let Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/products">products</Link>
      </li>
    </ul>
  );
};

export default Header
