import logo from '../../images/logo.svg';
import css3 from '../../images/css3.svg';
import js from '../../images/js.svg';
import html from '../../images/html.svg';

const TechStack = () => (
  <div>
    <div className="text-container">
      <h1>My Tech Stack</h1>
      <h3>Technologies I have been using</h3>
      <div className="tech-container">
        <img src={logo} alt="react" />
        <img src={css3} alt="react" />
        <img src={js} alt="js" />
        <img src={html} alt="html" />
      </div>
    </div>
  </div>
);
export default TechStack;
