import cardData from '../../app/cardData';

const ProjectCard = () => (
  <div className="card-container">
    {Object.values(cardData).map((card) => (
      <div key={card.title}>
        <img src={card.image} alt={card.title} className="h-10 w-10 rounded-full" />
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <p>{card.language}</p>
      </div>
    ))}
  </div>
);

export default ProjectCard;
