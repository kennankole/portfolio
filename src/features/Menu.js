import { Route, Routes } from 'react-router-dom';

import About from './about/About';
import Projects from './projects/Projects';
import TechStack from './techstacks/TechStack';
import DesktopNavigation from './navigation/Navigation';
import MobileMenu from './navigation/MobileNavigation';

import Home from './Home';

const Menu = () => (
  <section>
    <div>
      <DesktopNavigation />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techstack" element={<TechStack />} />
      </Routes>
    </div>
  </section>
);
export default Menu;
