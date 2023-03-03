/* eslint-disable import/no-extraneous-dependencies */
import { CgMenu, CgClose } from 'react-icons/cg';
import { useState } from 'react';
import NavLinks from './NavLinks';

const MobileMenu = () => {
  const [hamburger, setHamburger] = useState(false);
  const openMenu = (
    <CgMenu
      size="40px"
      className="hamburger-menu"
      color="white"
      onClick={() => setHamburger(!hamburger)}
    />
  );

  const closeMenu = (
    <CgClose
      size="40px"
      className="hamburger-menu"
      color="white"
      onClick={() => setHamburger(!hamburger)}
    />
  );

  return (
    <div className="nav-container mobile">
      <nav className="flex">
        { hamburger ? closeMenu : openMenu }
        { hamburger && <NavLinks />}
      </nav>
    </div>
  );
};
export default MobileMenu;
