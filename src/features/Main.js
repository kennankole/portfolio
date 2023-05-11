import NavigationMenu from './navigation/Navigation';
import TechStack from './techstacks/TechStack';
import Projects from './projects/Projects';
import About from './about/About';
import ContactForm from './contact/ContactForm';
import HomePage from './HomePage';
import Footer from './footer/Footer';

const Home = () => (
  <main>
    <NavigationMenu />
    <br />
    <HomePage />
    <br />
    <About />
    <br />
    <br />
    <br />
    <Projects />
    <br />
    <br />
    <TechStack />
    <br />
    <br />
    <ContactForm />
    <br />
    <Footer />
  </main>
);

export default Home;
