import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaLink } from 'react-icons/fa';
import cardData from '../../app/cardData';

const ProjectCard = () => (
  <div className="flex flex-wrap justify-center p-15">
    {Object.values(cardData).map((card) => (
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 m-2 border-2 border-sky-500 rounded-lg" key={card.title}>
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img src={card.image} alt={card.title} className="project-img rounded-t-lg" />
            </div>
            <h2 className="text-2xl p-3">{card.title}</h2>
            <p className="p-3">{card.description}</p>
            <p className="p-3">
              Tech Stack:
              {' '}
              {card.language}
            </p>
            <p className="p-3">
              Live Preview
              <FaLink />
              {' '}
              View Code
              <FontAwesomeIcon icon={faGithub} />
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectCard;
