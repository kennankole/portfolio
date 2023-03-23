import { BsGithub } from 'react-icons/bs';
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
              {card.language}
            </p>
            <div className="flex justify-around w-full">
              <div className=" flex text">
                <div className="flex items-center"><FaLink /></div>
                <div className="flex items-center"><p className="p-3">Live Preview</p></div>
              </div>
              <div className="flex">
                <div className="flex items-center"><BsGithub /></div>
                <div className="flex items-center"><p className="p-3">View Code</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectCard;
