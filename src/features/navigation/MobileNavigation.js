/* eslint-disable import/no-extraneous-dependencies */
import { CgMenu, CgClose } from 'react-icons/cg';
import { useState } from 'react';
import NavLinks from './NavLinks';

const MobileMenu = () => {
  const isMobile = false;
  const [hamburger, setHamburger] = useState(false);
  const openMenu = (
    <CgMenu
      size="40px"
      className="hamburger-menu"
      color="black"
      onClick={() => setHamburger(!hamburger)}
    />
  );

  const closeMenu = (
    <CgClose
      size="40px"
      className="hamburger-menu"
      color="black"
      onClick={() => setHamburger(!hamburger)}
    />
  );
  const closeMobileMenu = () => setHamburger(false);
  return (
    <div className="mobile-menus">
      <nav>
        { hamburger ? closeMenu : openMenu }
        <ul>
          { hamburger && <NavLinks isMobile={isMobile} closeMobileMenu={closeMobileMenu} />}
        </ul>
      </nav>
    </div>
  );
};
export default MobileMenu;
