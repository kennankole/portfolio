import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const NavLinks = ({ props }) => (
  <>
    <Link to="/" exact activeClassName="active" className="link-items" onClick={() => props.isMobile && props.closeMobileMenu()}>
      Home
    </Link>

    <Link to="/about" className="link-items" activeClassName="active" onClick={() => props.isMobile && props.closeMobileMenu()}>
      About
    </Link>

    <Link to="/projects" className="link-items" activeClassName="active" onClick={() => props.isMobile && props.closeMobileMenu()}>
      Projects
    </Link>

    <Link to="/techstack" className="link-items" activeClassName="active" onClick={() => props.isMobile && props.closeMobileMenu()}>
      TechStack
    </Link>
    <li className="link-items">
      <a
        href="https://www.linkedin.com/in/kennedyomondi"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <FontAwesomeIcon
          icon={faLinkedin}
        />
      </a>
    </li>
    <li className="link-items">
      <a
        href="https://github.com/kennankole"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </li>
    <li className="link-items">
      <a
        href="https://twitter.com/KennedyObwombe"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li>
  </>
);

NavLinks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
};
export default NavLinks;
