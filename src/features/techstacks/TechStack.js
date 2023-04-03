import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import html from '../../images/html.png';
import bootstrap from '../../images/bootstrap.png';
import django from '../../images/django.png';
import docker from '../../images/docker.png';
import flask from '../../images/flask.png';
import git from '../../images/git.png';
import githublogo from '../../images/githublogo.png';
import tailwind from '../../images/tailwind.png';
import Ruby from '../../images/Ruby.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import python from '../../images/python.jpg';
import rails from '../../images/rails.png';
import gitlab from '../../images/gitlab.png';
import postgresql from '../../images/postgresql.png';
import './TechStack.css';

const TechStack = () => (
  <div className="flex flex-col justify-center stack-container">
    <h1 className="text-3xl text-center font-bold">My Tech Stack</h1>
    <p className="max-[600px]:text-lg text-xl text-center p-2">Technologies I have been working with recently </p>
    <div className="flex justify-around items-center flex-wrap p-10 fron-end-stack">
      <img className="max-[600px]:max-w-[35%] max-w-[9%] m-6" src={html} alt="html" />
      <img className="max-[600px]:max-w-[26%] max-w-[6.5%] m-6" src={css} alt="react" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={javascript} alt="js" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={react} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={redux} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={bootstrap} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={tailwind} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={python} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={flask} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={django} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={Ruby} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={rails} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={postgresql} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={git} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={gitlab} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={githublogo} alt="html" />
      <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={docker} alt="html" />
    </div>
  </div>
);
export default TechStack;
