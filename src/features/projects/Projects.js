import ProjectCard from './ProjectCard';

const Projects = () => (
  <div className="p-10">
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h2 className="flex justify-center">Projects</h2>
        <h1 className="flex justify-center">Things I have built so far</h1>
      </div>
    </div>
    <ProjectCard />
  </div>
);
export default Projects;
