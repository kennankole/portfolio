import { Tooltip } from '@material-tailwind/react';
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

const TechStack = () => (
  <div className="flex flex-col justify-center p-5 stack-container" id="Technologies">
    <h1 className="text-3xl text-center font-bold">My Tech Stack</h1>
    <p className="max-[600px]:text-lg text-xl text-center p-2">Technologies I have been working with recently </p>
    <div className="flex justify-around items-center flex-wrap fron-end-stack">
      <Tooltip content="HTML">
        <img className="max-[600px]:max-w-[35%] max-w-[9%] m-6" src={html} alt="html" />
      </Tooltip>
      <Tooltip content="CSS">
        <img className="max-[600px]:max-w-[26%] max-w-[6.5%] m-6" src={css} alt="react" />
      </Tooltip>
      <Tooltip content="JavaScript">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={javascript} alt="js" />
      </Tooltip>
      <Tooltip content="React">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={react} alt="html" />
      </Tooltip>
      <Tooltip content="Redux">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={redux} alt="html" />
      </Tooltip>
      <Tooltip content="BootStrap">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={bootstrap} alt="html" />
      </Tooltip>
      <Tooltip content="Tailwind CSS">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={tailwind} alt="html" />
      </Tooltip>
      <Tooltip content="Python">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={python} alt="html" />
      </Tooltip>
      <Tooltip content="Flask">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={flask} alt="html" />
      </Tooltip>
      <Tooltip content="Django">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={django} alt="html" />
      </Tooltip>
      <Tooltip content="Ruby">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={Ruby} alt="html" />
      </Tooltip>
      <Tooltip content="Ruby On Rails">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={rails} alt="html" />
      </Tooltip>
      <Tooltip content="PostgreSQL">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={postgresql} alt="html" />
      </Tooltip>
      <Tooltip content="Git">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={git} alt="html" />
      </Tooltip>
      <Tooltip content="GitLab">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={gitlab} alt="html" />
      </Tooltip>
      <Tooltip content="GitHub">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={githublogo} alt="html" />
      </Tooltip>
      <Tooltip content="Docker">
        <img className="max-[600px]:max-w-[30%] max-w-[7%] m-6" src={docker} alt="html" />
      </Tooltip>
    </div>
  </div>
);
export default TechStack;
