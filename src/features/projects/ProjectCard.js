import { NavLink } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';
import cardData from '../../app/cardData';

const Cards = ({ data }) => (
  <Card className="max-w-[24rem] overflow-hidden m-1">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none"
    >
      <img
        src={data.image}
        alt={data.title}
      />
    </CardHeader>
    <br />
    <h3 className="text-center text-2xl">TechStack</h3>
    <div className="flex m-5 items-center justify-center">
      {Object.keys(data.language).map((stack) => (
        <div className="flex flex-wrap" key={stack}>
          <Tooltip content={stack}>
            <Avatar
              size="sm"
              variant="circular"
              alt={stack}
              src={data.language[stack]}
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap items-center gap-3 justify-between m-5">
      <Tooltip content="Project repo">
        <NavLink
          to={data.github}
          target="_blank"
          rel="noopener norferrer"
        >
          <BsGithub className="w-5 h-5" />
        </NavLink>
      </Tooltip>
      <Tooltip content="Live Preview">
        <NavLink
          to={data.liveLink}
          target="_blank"
          rel="noopener norferrer"
        >
          <FaLink className="w-5 h-5" />
        </NavLink>
      </Tooltip>
    </div>
    <CardBody>
      <Typography variant="h4" color="blue-gray">
        {data.title}
      </Typography>
      <Typography variant="lead" color="gray" className="mt-3 font-normal">
        {data.description}
      </Typography>
    </CardBody>
  </Card>
);

Cards.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

const ProjectCard = () => (
  <div className="flex flex-wrap justify-center m-5 py-3">
    {Object.values(cardData).map((data) => (
      <Cards key={data.id} data={data} />
    ))}
    {/* <section className="flex justify-center flex-wrap m-5">
      {Object.values(cardData).map((card) => (
        <Card className="max-w-[24rem] overflow-hidden" key={card.id}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={card.image}
              alt="img-blur-shadow"
              className="w-full h-full"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              {card.title}
            </Typography>
            <div className="flex items-center justify-between py-3">
              <Tooltip content="Github">
                <NavLink
                  to={card.github}
                  target="_blank"
                  rel="noopener norferrer"
                >
                  <BsGithub />
                </NavLink>
              </Tooltip>
              <Typography variant="small">
                <Tooltip content="Live Preview">
                  <NavLink
                    to={card.liveLink}
                    target="_blank"
                    rel="noopener norferrer"
                  >
                    <FaLink />
                  </NavLink>
                </Tooltip>
              </Typography>
            </div>
            <div className="flex justify-between items-center py-3">
              <Typography className="font-normal">TechStack</Typography>
              <div className="flex items-center -space-x-3">
                {card.language.map(img) => (
                   <Tooltip content="HTML">
                   <Avatar
                     size="sm"
                     variant="circular"
                     alt="html"
                     src={html}
                     className="border-2 border-white hover:z-10"
                   />
                 </Tooltip>
                )}
                <Tooltip content="HTML">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="html"
                    src={html}
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
                <Tooltip content="CSS">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="css"
                    src={css}
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
                <Tooltip content="React">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="react"
                    src={react}
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
              </div>
            </div>
            <Typography variant="lead" color="gray" className="mt-3 font-normal">
              {card.description}
            </Typography>
          </CardBody>
        </Card>
      ))} */}
    {/* </section> */}
  </div>
);

export default ProjectCard;
