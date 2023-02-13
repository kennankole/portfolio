/* eslint-disable import/no-extraneous-dependencies */
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import NavigationMenu from './Navigation';
import Home from './Home';

const Menu = () => (
  <BrowserRouter>
    <div>
      <h1>Hello</h1>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techstack" element={<TechStack />} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default Menu;
