import DesktopNavigation from './navigation/Navigation';
import TechStack from './techstacks/TechStack';
import Projects from './projects/Projects';
import About from './about/About';
import ContactForm from './contact/ContactForm';
import Example from './Menu';
import Footer from './footer/Footer';

const Home = () => (
  <main>
    <DesktopNavigation />
    <Example />
    <About />
    <Projects />
    <TechStack />
    <ContactForm />
    <Footer />
  </main>
);

export default Home;
