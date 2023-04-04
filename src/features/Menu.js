/* eslint-disable no-unused-vars */
import { createBrowserRouter, Link } from 'react-router-dom';

import About from './about/About';
import Projects from './projects/Projects';
import TechStack from './techstacks/TechStack';
// import DesktopNavigation from './navigation/Navigation';
// import MobileMenu from './navigation/MobileNavigation';

import ErrorPage from './card/Language';

import Home from './Home';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/tech',
    element: <TechStack />,
    errorElement: <ErrorPage />,
  },
];

const Menu = () => {
  const LinkComponent = createBrowserRouter().Link;
  return (
    <nav>
      { routes.map(({ path, element }) => (
        <LinkComponent to={path} key={path}>
          {element}
        </LinkComponent>
      ))}
    </nav>
  );
};
//   <section>
//     <div>
//       <DesktopNavigation />
//       <MobileMenu />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/techstack" element={<TechStack />} />
//       </Routes>
//     </div>
//   </section>
// );
export default Menu;
