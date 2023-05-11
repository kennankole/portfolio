// import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import {
  // Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import PropTypes from 'prop-types';
import cardData from '../../app/cardData';

const Cards = ({ data }) => (
  <div className="max-w-[24rem] overflow-hidden m-1 static">
    <CardHeader
      shadow={false}
      color="transparent"
      className="m-0 rounded-none static"
    >
      <img
        src={data.image}
        alt={data.title}
        className="card-section"
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
              className="border-2 border-white hover:z-10 static"
            />
          </Tooltip>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap items-center gap-3 justify-between m-5">
      <Tooltip content="Project repo">
        <a href={data.github} className="flex items-center" target="_blank" rel="noopener norferrer noreferrer">
          <BsGithub className="w-5 h-5" />
        </a>
      </Tooltip>
      <Tooltip content="Live Preview">
        <a href={data.liveLink} className="flex items-center" target="_blank" rel="noopener norferrer noreferrer">
          <FaLink className="w-5 h-5" />
        </a>
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
  </div>
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

  </div>
);

export default ProjectCard;
