import React from "react";
import SocialMedia from "./SocialMedia";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element name="home">
      {" "}
      <div>
        <section class="py-10 md:py-16 h-[800px] lg:h-[862px]">
          <div class="container max-w-screen-xl mx-auto px-4 p-48">
            {/* <nav class="flex items-center justify-between mb-40">
  <img src="assets/image/navbar-logo.png" alt="Logo"/>

  <button class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
</nav> */}

            <div class="text-center">
              <div class="flex justify-center mb-4 ">
                <img
                  class="rounded-full  h-32 w-32  border-indigo-200 border-2 shadow-sm"
                  src="/images/profile/profile.jpg"
                  alt="Imag"
                />
              </div>

              <Element name="home">
                {" "}
                <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                  Shubham Shahane
                </h6>
              </Element>

              <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
                Frontend Developer (ReactJS)
              </h1>

              <p class="font-normal text-gray-600 text-md md:text-xl mb-16">
                I have a passion for software. I enjoy creating tools that make
                life easier for people.
              </p>

              {/* <a
              href=""
              class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
            >
              Hire me
            </a> */}
              <SocialMedia />
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Home;
