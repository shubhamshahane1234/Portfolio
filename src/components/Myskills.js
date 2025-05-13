import React from "react";
import Myskill from "./Myskill";
import { Element } from "react-scroll";

const Myskills = () => {
  const skills = [
    {
      title: "Frontend Technologies",
      imgLink: [
        { name: "HTML", link: "/images/html.png" },
        { name: "CSS", link: "/images/css.logo.png" },
        { name: "JavaScript", link: "images/js.png" },
        { name: "ReactJS", link: "images/reactjs.png" },
        { name: "TypeScript", link: "images/ts.png" },
        { name: "Three JS", link: "images/threejs.png" },
      ],
    },
    {
      title: "UI Technologies",
      imgLink: [
        { name: "Material UI", link: "/images/mui.png" },
        { name: "Bootstrap", link: "/images/bs.png" },
        { name: "Tailwind CSS", link: "images/tailwind1.png" },
      ],
    },
    {
      title: "State Management Technology",
      imgLink: [{ name: "Redux", link: "/images/redux2.png" }],
    },
    {
      title: "Testing Library",
      imgLink: [
        { name: "Jest", link: "/images/jest.png" },
        { name: "Enzyme", link: "/images/enzyme.png" },
        { name: "React test library", link: "/images/rtl.png" },
      ],
    },
  ];

  return (
    <>
      {/* <section className="bg-[#E8E8E8] text-center h-[100%]  p-[9px]">
        <div className=" shadow-md rounded-md  w-[1216px] m-auto  bg-[#FFFFFF] text-center p-[20px]">
          <h2 class="text-center text-3xl">
            <b> Professional Skillset</b>
          </h2>
          {skills.map((skill) => {
            return (
              <div class=" items-center mt-6  h-16 sm:flex justify-between p-[15px] ">
                <h4 class="text">{skill.title}</h4>
                <div class="flex">
                  {skill?.imgLink?.map((link) => {
                    return <Myskill src={link} />;
                  })}
                </div>
              </div>
            );
          })}

     
        </div>
      </section> */}

      <section className="bg-gray-200 text-center py-9">
        <div className="shadow-md rounded-md max-w-[1216px] mx-auto bg-white text-center p-4 sm:p-8">
          <Element name="skills">
            {" "}
            <h2 className="text-center text-3xl font-bold mb-4">
              TECHNICAL SKILLS
            </h2>
          </Element>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between mt-6 sm:mt-8 p-4 sm:p-6"
            >
              <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {skill.title}
              </h5>
              {/* <h4 className="text-lg">{skill.title}</h4> */}
              <div className="flex mt-4 sm:mt-0">
                {skill.imgLink.map((link, index) => (
                  <Myskill key={index} src={link} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Myskills;
