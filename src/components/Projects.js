import React from "react";
import Github from "../icons/Github";
import CheckWebsite from "../icons/CheckWebsite";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery App",
      siteImg: "images/Projects/FoodieFeast.png",
      websiteLink: "https://shubhamfoodiefeast.vercel.app/",
      codeLink: "https://github.com/shubhamshahane1234/foodiefeast",
    },

    {
      title: "Latest PortFolio",
      siteImg: "images/Projects/newportfolio.png",
      websiteLink: "",
      codeLink: "",
    },
    {
      title: "E-Commerce Site",
      siteImg: "images/Projects/cealum.png",
      websiteLink:
        "https://caelumgaurav-65468-react-native.b65468.dev.eastus.az.svc.builder.cafe/Home",
      codeLink: "",
    },
    {
      title: "Old Portfolio Site",
      siteImg: "images/Projects/oldportfolio.png",
      websiteLink: "https://shubhamshahane1234.github.io/home/",
      codeLink: "https://github.com/shubhamshahane1234/home",
    },
    {
      title: "Latest News",
      siteImg: "images/Projects/latestnews.png",
      websiteLink: "https://shubhamshahane1234.github.io/latestnews/",
      codeLink: "https://github.com/shubhamshahane1234/latestnews",
    },
    {
      title: "News site (old)",
      siteImg: "images/Projects/oldnewssite.png",
      websiteLink: "https://shubhamshahane1234.github.io/news/",
      codeLink: "https://github.com/shubhamshahane1234/news",
    },
  ];
  return (
    <section class="">
      <div class="px-4 py-8 mx-auto max-w-7xl">
        <div class="space-y-4">
          <Element name="projects">
            {" "}
            <h2 class="text-3xl font-bold text-center">Projects</h2>
          </Element>
          <p class="mx-auto font-light text-center text-gray-600 max-w-96">
            Here are few project i worked on recently
          </p>
        </div>
        <div class="relative w-full p-4 mt-16">
          {/* <div class="absolute left-0 hidden w-full h-px -translate-y-1/2 bg-gray-950/10 lg:top-1/2 md:top-1/3 md:block"></div>
          <div class="absolute hidden w-px h-full md:block bg-gray-950/10 left-1/2 lg:left-1/3"></div>
          <div class="absolute left-0 hidden w-full h-px lg:w-px lg:h-full bg-gray-950/10 lg:left-2/3 top-2/3 lg:top-0 md:block"></div> */}
          <div class="grid grid-cols-1 gap-4 p-4  md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project) => {
              return (
                <div>
                  <div class="flex flex-col items-center justify-center px-4 py-8 space-y-4">
                    <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                      <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 border-indigo-200 border-2 ">
                        <img src={project.siteImg} alt="site"></img>
                      </div>
                      <div class="p-6">
                        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          {project.title}
                        </h5>
                        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc felis ligula.
                        </p>
                      </div>
                      <div class="p-6 pt-0 ">
                        <div class="flex justify-around items-center">
                          <a href={project.websiteLink}>
                            <CheckWebsite />
                          </a>
                          <a href={project.codeLink}>
                            {" "}
                            <Github />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
