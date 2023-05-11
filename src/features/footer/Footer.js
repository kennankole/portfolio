import { Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin, faMedium,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="flex flex-col w-full p-8 mt-20">
    <div className="flex flex-wrap justify-between upper-footer">
      <div className="items-center flex flex-wrap items-center gap-y-2 gap-x-8">
        <Typography className="text-center font-normal">
          &copy; 2023 Kennankole
        </Typography>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-y-2 w-1/2" id="social-icons">
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-8">
          <Typography
            as="a"
            href="/"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            +254716244165
          </Typography>
          <Typography
            as="a"
            href="/"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            kennankole@gmail.com
          </Typography>
        </div>
        <div className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <Typography
            as="a"
            href="https://twitter.com/KennedyObwombe"
            target="_blank"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Typography>
          <Typography
            as="a"
            href="https://www.linkedin.com/in/kennedyomondi"
            target="_blank"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Typography>
          <Typography
            as="a"
            href="https://github.com/kennankole"
            target="_blank"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Typography>
          <Typography
            as="a"
            href="https://medium.com/@kennankole"
            target="_blank"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FontAwesomeIcon icon={faMedium} />
          </Typography>
          <Typography
            as="a"
            href="/"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FontAwesomeIcon icon={faAngellist} />
          </Typography>
        </div>
      </div>
    </div>
    <hr className="my-8 border-blue-gray-50" />
    <div className=" flex justify-between lower-footer">
      <div className="flex flex-wrap items-center gap-y-2 gap-x-8 w-1/2 footer-ul">
        <Typography
          as="a"
          href="https://wellfound.com/u/omndi-kennedy"
          target="_blank"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          Home
        </Typography>
        <Typography
          as="a"
          href="about"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          About
        </Typography>
        <Typography
          as="a"
          href="projects"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          Projects
        </Typography>
        <Typography
          as="a"
          href="techstack"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          TechStack
        </Typography>
      </div>
      <div className="flex gap-x-2 flex-wrap acknowlege">
        Designed by
        <Typography
          as="a"
          href="https://www.figma.com/@pavanmg007"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          Pravan
        </Typography>
        and built by
        <Typography
          as="a"
          href="https://github.com/kennankole"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        >
          kennankole
        </Typography>

      </div>
    </div>
  </footer>
);
export default Footer;
