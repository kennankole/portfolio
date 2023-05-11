import {
  CardBody,
  Typography,
  Tooltip,
} from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faGithub, faLinkedin, faMedium,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';

const HomePage = () => (
  <div className="flex flex-wrap justify-between p-10" id="Home">
    <div className="home-section mb-5">
      <CardBody className="flex">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <p className="home-para">
            Hi 👋,
            {' '}
            <br />
            My name is
            {' '}
            <br />
            Obwombe Kennedy
            {' '}
            <br />
            I build things for web
          </p>
        </Typography>
      </CardBody>
    </div>
    <div className="flex flex-col justify-center flex-wrap connect">
      <Typography variant="h5" className="text-center">
        You can find me on
      </Typography>
      <div className="flex justify-center space-x-7">
        <Typography>
          <Tooltip
            content="Twitter"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a
              href="https://twitter.com/KennedyObwombe"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
            </a>
          </Tooltip>
        </Typography>
        <Typography>
          <Tooltip
            content="LinkedIn"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a
              href="https://www.linkedin.com/in/kennedyomondi"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </a>
          </Tooltip>
        </Typography>
        <Typography>
          <Tooltip
            content="GitHub"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a
              href="https://github.com/kennankole"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </a>
          </Tooltip>
        </Typography>
        <Typography>
          <Tooltip
            content="Medium"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a
              href="https://medium.com/@kennankole"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} className="text-3xl" />
            </a>
          </Tooltip>
        </Typography>
        <Typography>
          <Tooltip
            content="WellFound"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <a
              href="https://wellfound.com/u/omndi-kennedy"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faAngellist} className="text-3xl" />
            </a>
          </Tooltip>
        </Typography>
      </div>
    </div>
  </div>
);
export default HomePage;
