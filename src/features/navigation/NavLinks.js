import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const NavLinks = () => (
  <ul className="flex flex-row space-x-10 ">
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
      <a
        href="https://www.linkedin.com/in/kennedyomondi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </li>

    <li>
      <a
        href="https://github.com/kennankole"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/KennedyObwombe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li>
  </ul>
);
export default NavLinks;
