import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

const MobileNavLinks = ({ props }) => (
  <>
    <NavLink
      to="/"
      exact
      activeClassName="active"
      className="link-items"
      onClick={() => props.isMobile && props.closeMobileMenu()}
    >
      Home
    </NavLink>

    <Link
      to="about"
      className="link-items"
      activeClassName="active"
      onClick={() => props.isMobile && props.closeMobileMenu()}
    >
      About
    </Link>

    <NavLink
      to="projects"
      className="link-items"
      activeClassName="active"
      onClick={() => props.isMobile && props.closeMobileMenu()}
    >
      Projects
    </NavLink>

    <NavLink
      to="techstack"
      className="link-items"
      activeClassName="active"
      onClick={() => props.isMobile && props.closeMobileMenu()}
    >
      TechStack
    </NavLink>
    <NavLink
      className="link-items"
      to="https://www.linkedin.com/in/kennedyomondi"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => props.isMobile && props.closeMobileMenu()}
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
      onClick={() => props.isMobile && props.closeMobileMenu()}
    >
      <FontAwesomeIcon icon={faGithub} />
    </NavLink>

    <NavLink
      className="link-items"
      to="https://twitter.com/KennedyObwombe"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => props.isMobile && props.closeMobileMenu()}
    >
      <FontAwesomeIcon icon={faTwitter} />
    </NavLink>
  </>
);

MobileNavLinks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
};
export default MobileNavLinks;
