import { NavLink } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import cardData from '../../app/cardData';

const ProjectCard = () => (
  <div className="flex flex-wrap justify-center p-15 m-5">
    {Object.values(cardData).map((card) => (
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 m-2 border-2 border-sky-500 rounded-lg" key={card.title}>
        <div className="flex">
          <div className="flex flex-col">
            <div className="justify-center">
              <img src={card.image} alt={card.title} className="project-img rounded-t-lg" />
              <h2 className="text-2xl p-2">{card.title}</h2>
              <p className="p-3">{card.description}</p>
              <p className="p-3">
                Tech Stack:
                {card.language}
              </p>
            </div>
            <div className="flex justify-around w-full">
              <div className=" flex text">
                <div className="flex items-center"><FaLink /></div>
                <div className="flex items-center">
                  <NavLink
                    className="link-items"
                    to={card.liveLink}
                    target="_blank"
                    rel="noopener norferrer"
                  >
                    Live Preview
                  </NavLink>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center"><BsGithub /></div>
                <div className="flex items-center">
                  <NavLink
                    className="link-items"
                    to={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    View code
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectCard;
