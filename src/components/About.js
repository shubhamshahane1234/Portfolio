import React from "react";
import { Element } from "react-scroll";

const About = () => {
  const aboutList = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5-10 5v10l10 5 10-5v-3"></path>
        </svg>
      ),
      desc: "  Core knowledge in react",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 12L12 8l-4 4"></path>
        </svg>
      ),
      desc: "Expertise in React Hooks, Redux, and Context API",
    },

    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path d="M3 18v-6a9 9 0 0118 0v6"></path>
          <path d="M21 15v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3"></path>
        </svg>
      ),
      desc: "Experience with Restful API, GraphQL for efficient data fetching",
    },

    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-6 h-6 flex-shrink-0 mr-4"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4.5 8-10V5l-8-3-8 3v7c0 5.5 8 10 8 10z"></path>
        </svg>
      ),
      desc: " Familiarity with testing frameworks such as Jest and React Testing Library",
    },
  ];
  return (
    <>
      <hr />
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-10">
            <Element name="about">
              <h1
                id="abouttitle"
                className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4"
              >
                Hello! I'm Shubham
              </h1>
            </Element>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              With 3+ years of experience in React.js development, I specialize
              in building scalable web applications, responsive UI/UX,
              integrating APIs, and delivering high-quality code that enhances
              user experiences.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {aboutList.map((item) => {
              return (
                <>
                  <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                      {item.svg}
                      <span className="title-font font-medium text-left">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
