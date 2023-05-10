import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import DarkModeToggle from '../darkMode/darkMode';

const NavLinks = () => (
  <div>
    <div>
      <DarkModeToggle className="link-item" />
      <NavLink
        to="/"
        exact
        activeClassName="active"
        className="link-items"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="link-items"
        activeClassName="active"
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        className="link-items"
        activeClassName="active"
      >
        Projects
      </NavLink>

      <NavLink
        to="/techstack"
        className="link-items"
        activeClassName="active"
      >
        TechStack
      </NavLink>
      <NavLink
        className="link-items"
        to="https://www.linkedin.com/in/kennedyomondi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
        />
      </NavLink>
      <NavLink
        className="link-items"
        to="https://github.com/kennankole"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </NavLink>

      <NavLink
        className="link-items"
        to="https://twitter.com/KennedyObwombe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </NavLink>
    </div>
  </div>
);
export default NavLinks;
