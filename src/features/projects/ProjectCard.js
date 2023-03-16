import cardData from '../../app/cardData';

const ProjectCard = () => (
  <div className="flex flex-wrap justify-center">
    {Object.values(cardData).map((card) => (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 m-1 border-2 border-sky-500" key={card.title}>
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <img src={card.image} alt={card.title} className="h-10 w-10 rounded-full" />
            </div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <p>{card.language}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectCard;
