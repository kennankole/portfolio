/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [burgerClass, setBurgerClass] = useState('menu-bar unclicked');
  const [openHamburgerMenu, setHamburgerMenu] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleHamburgerMenu = () => {
    if (!openHamburgerMenu) {
      setMenuClass('menu visible');
      setBurgerClass('menu-bar clicked');
    } else {
      setBurgerClass('menu-bar unclicked');
      setMenuClass('menu hidden');
    }
    setHamburgerMenu(!openHamburgerMenu);
  };

  return (
    <div style={{ width: '100%', heigh: '100vh' }}>
      <nav>
        <div className="burger-menu" onClick={toggleHamburgerMenu}>
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>
      <div className={menuClass}>
        <h1>Hello</h1>
      </div>
    </div>
  );
};
export default HamburgerMenu;
