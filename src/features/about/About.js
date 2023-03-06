import { CgCalendarDates } from 'react-icons/cg';
import { FaSchool } from 'react-icons/fa';
import './About.css';

const About = () => (
  <section className="flex justify-start p-10 m-8 w-5/6 about-me-section ">
    <div className="w-4/5 about-container">
      <div className=" flex flex-col about-me-text">
        <h1 className="font-bold py-5 title">About Me</h1>
        <p className="w-4/5 font-semibold about-para">
          The Generator App is an online
          tool that helps you to export
          ready-made templates ready to
          work as your future website.
          It helps you to combine slides,
          panels and other components and
          export it as a set of static
          files: HTML/CSS/JS.
        </p>
      </div>
      <div className=" flex flex-col about-me-work">
        <h1 className="font-bold font-semibold about-work">Work Experience</h1>
        <div className="flex flex-col work-harts">
          <div className="flex justify-between py-5 work-titles">
            <div className="p-2 job-title">
              <h3 className="font-semibold">Junior Web Developer</h3>
              <p className="font-semibold">Microverse Inc.</p>
            </div>
            <div className="p-2 date">
              <div className="flex flex justify-end">
                <span className="font-semibold w-1/2 flex justify-center py-1">Full Time</span>
              </div>
              <p className="flex items-center justify-around font-semibold">
                <CgCalendarDates />
                Sep 2022 - May 2023

              </p>
            </div>
          </div>
          <div className="flex justify-between py-5 work-titles">
            <div className="p-2 job-title">
              <h3 className="font-semibold">Junior Web Developer</h3>
              <p className="font-semibold">Microverse Inc.</p>
            </div>
            <div className="p-2 date">
              <div className="flex flex justify-end">
                <span className="font-semibold w-1/2 flex justify-center py-1">Full Time</span>
              </div>
              <p className="flex items-center justify-around font-semibold">
                <CgCalendarDates />
                Sep 2022 - May 2023

              </p>
            </div>
          </div>
          <div className="flex justify-between py-5 work-titles">
            <div className="p-2 job-title">
              <h3 className="font-semibold">Junior Web Developer</h3>
              <p className="font-semibold">Microverse Inc.</p>
            </div>
            <div className="p-2 date">
              <div className="flex flex justify-end">
                <span className="font-semibold w-1/2 flex justify-center py-1">Full Time</span>
              </div>
              <p className="flex items-center justify-around font-semibold">
                <CgCalendarDates />
                Sep 2022 - May 2023

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col about-me-education">
        <h1 className="font-bold py-5 font-semibold about-education">Education</h1>
        <div className="flex justify-between py-5 work-titles">
          <div className="p-2 font-semibold education-title">
            <h3 className="font-semibold">Bachelof of Science in Geospatial Engineering</h3>
            <p className="flex items-center justify-around font-semibold">
              <FaSchool />
              Dedan Kimathi University Of Technology
            </p>
          </div>
          <div className="p-2 date font-semibold">
            <div className="flex flex justify-end">
              <span className="font-semibold w-1/2 flex justify-center py-1">Full Time</span>
            </div>
            <p className="flex items-center justify-around">
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
