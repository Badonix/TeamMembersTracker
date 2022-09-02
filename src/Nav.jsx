import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">მთავარი</Link>
        </li>
        <li>
          <Link to="/GroupedTeamMembers">გუნდის წევრები</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
