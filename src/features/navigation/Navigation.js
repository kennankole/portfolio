import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Switch,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-scroll';

const NavigationMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [theme, setTheme] = React.useState('day');
  const toggleTheme = () => {
    if (theme === 'day') {
      setTheme('night');
    } else {
      setTheme('day');
    }
  };

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const NavLinks = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="Home"
          spy
          smooth
          offset={-100}
          className="flex items-center scroll"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="About"
          className="flex items-center scroll"
          spy
          smooth
          offset={-100}
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="Projects"
          spy
          smooth
          offset={-100}
          className="flex items-center scroll"
        >
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="Technologies"
          spy
          smooth
          offset={-100}
          className="flex items-center scroll"
        >
          Technologies
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="Contact"
          spy
          smooth
          offset={-100}
          className="flex items-center scroll"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <Switch onClick={toggleTheme} label={theme} />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{NavLinks}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {NavLinks}
      </MobileNav>
    </Navbar>
  );
};

export default NavigationMenu;
