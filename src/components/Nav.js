import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav class="bg-gray-200 fixed w-[100%] z-20 shadow shadow-gray-300 w-100 px-8 md:px-auto  ">
      <div class="md:h-16 h-28 mx-auto md:px-4  flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* <!-- Logo --> */}
        <div class="relative w-12 h-12">
          <img
            class="rounded-full  border-indigo-200 border-2  shadow-sm"
            src="/images/profile/profile.jpg"
            alt="user "
          />
          {/* <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div> */}
        </div>
        <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul class="flex font-semibold justify-between">
            {/* <!-- Active Link = text-indigo-500
          Inactive Link = hover:text-indigo-500 --> */}
            <li class="md:px-4  md:py-2 text-md hover:text-indigo-400 cursor-pointer ">
              <Link
                activeClass="text-indigo-500"
                to="home"
                spy={true}
                smooth={true}
                offset={-390}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400 cursor-pointer">
              <Link
                activeClass="text-indigo-500"
                to="skills"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400 cursor-pointer">
              <Link
                activeClass="text-indigo-500"
                to="projects"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                projects
              </Link>
            </li>
            <li class="md:px-4 md:py-2 hover:text-indigo-400 cursor-pointer">
              <Link
                activeClass="text-indigo-500"
                to="about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                About
              </Link>
            </li>
            {/* <li class="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#">Contact</a>
            </li> */}
          </ul>
        </div>
        <div class="order-2 md:order-3">
          <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            {/* <!-- Heroicons - Login Solid --> */}
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg> */}
            <span>
              <a
                href="/assets/files/shubham_shahane_resumeU.pdf"
                download="shubham_shahane_CV.pdf"
              >
                Get my CV
              </a>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
