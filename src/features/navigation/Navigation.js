import NavLinks from './NavLinks';

const DesktopNavigation = () => (
  <div className="nav-container bg-zinc-100 p-5 desktop">
    <nav className="flex flex-col items-center nav-ul">
      <ul className="flex flex-row space-x-10 ">
        <NavLinks />
      </ul>
    </nav>
  </div>
);
export default DesktopNavigation;
