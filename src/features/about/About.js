import { CgCalendarDates } from 'react-icons/cg';
import { FaSchool } from 'react-icons/fa';
import './About.css';

const About = () => (
  <section className="flex justify-start min-[600px]:p-10 m-8 w-5/6 about-me-section ">
    <div className="min-[600px]:w-4/5 about-container">
      <div className=" flex flex-col about-me-text">
        <h1 className="font-bold py-5 title">About Me</h1>
        <p className="font-semibold about-para ">
          Hello, and welcome to my website! My name is Kennedy,
          and I am a junior full-stack developer with a passion for GIS.
          I have always been interested in the intersection of technology and geography,
          and that is what led me to pursue a degree in GIS. After graduation,
          I realized that I wanted to combine my GIS skills with web development
          to create powerful, interactive mapping applications.
          As a full-stack developer, I have experience with both front-end
          and back-end development. I enjoy working with JavaScript, Python,
          Ruby, HTML, CSS, and a variety of libraries and frameworks such as React-Redux, Flask,
          Ruby on Rails, and Django. I also have experience with SQL databases,
          as well as Docker.
          What sets me apart from other developers is my ability to think spatially.
          I can work with geospatial data, create custom maps,
          and develop location-based applications.
          I am excited to bring this unique perspective to any project I work on.
          If you are looking for a junior developer with a strong background in GIS,
          please do not hesitate to reach out.
          I am always eager to learn new things and take on new challenges.
          Thank you for visiting my website, and I look forward to hearing from you!
        </p>
      </div>
      <br />
      <div className=" flex flex-col about-me-work">
        <h1 className="font-bold font-semibold about-work">Work Experience</h1>
        <div className="flex flex-col work-harts">
          <div className="flex justify-between py-5 work-titles">
            <div className="p-2 job-title">
              <h3 className="font-semibold">Volunteer Mentor Student</h3>
              <p className="font-semibold">Microverse Inc.</p>
            </div>
            <div className="date">
              <div className="flex flex justify-end">
                <span className="font-semibold w-1/2 flex justify-center py-1">Full Time</span>
              </div>
              <p className="flex items-center justify-around font-semibold max-[375px]:text-sm">
                <CgCalendarDates />
                Sep 2022 - To Date

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col about-me-work">
        <h1 className="font-bold font-semibold about-work">Education</h1>
        <div className="flex justify-between py-5 work-titles">
          <div className="p-2 job-title">
            <h3 className="font-semibold">
              BSc. Geospatial Info. Science
            </h3>
            <p className="min-[375px]:font-semibold">
              <FaSchool />
              Dedan Kimathi University Of Technology.
            </p>
          </div>
          <div className="date">
            <div className="flex flex justify-end">
              <span className="font-semibold w-1/2 flex justify-center py-1">Full Time</span>
            </div>
            <p className="flex items-center justify-around font-semibold max-[375px]:w-36 min-[375px]:w-40">
              <CgCalendarDates />
              Sep 2016 - April 2020
            </p>
          </div>
        </div>
        <div className="flex justify-between py-5 work-titles">
          <div className="p-2 job-title">
            <h3 className="font-semibold">Full Stack Software Developer</h3>
            <p className="font-semibold">Microverse Inc.</p>
          </div>
          <div className="date">
            <div className="flex flex justify-end">
              <span className="font-semibold w-1/2 flex justify-center py-1">Full Time</span>
            </div>
            <p className="flex items-center justify-around font-semibold min-[375px]:text-sm">
              <CgCalendarDates />
              Sep 2022 - May 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;
