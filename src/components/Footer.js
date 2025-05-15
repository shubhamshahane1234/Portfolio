import React from "react";

const Footer = () => {
  let date = new Date();
  const year = date.getFullYear();
  return (
    <footer class="font-lexend py-4 w-full min-h-full bg-gray-200">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xxl md:px-24 lg:px-8">
        <div className="flex flex-col-reverse justify-between border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright {year} Shubham Shahane. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
