/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

const NavigationMenu = () => (
  <nav>
    <ul>
      <li>
        <Link to="/" exact activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" activeClassName="active">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/techstack" activeClassName="active">
          TechStack
        </Link>
      </li>
      <li>
        <Link to="/linkedin" activeClassName="active">
          LinkedIn
        </Link>
      </li>
      <li>
        <Link to="/github" activeClassName="active">
          Github
        </Link>
      </li>
      <li>
        <Link to="/twitter" activeClassName="active">
          Twitter
        </Link>
      </li>
    </ul>
  </nav>
);
export default NavigationMenu;
