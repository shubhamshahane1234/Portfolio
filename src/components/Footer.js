import React from "react";

const Footer = () => {
  return (
    <footer class="font-lexend py-4 w-full min-h-full bg-gray-200">
      <div class="max-w-[80rem] mx-auto space-y-6 px-2 md:px-4 lg:px-6 pt-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-y-6">
          <div class="text-gray-700">
            <ul>
              <li class="mb-4">
                <h2 class="font-bold text-lg">Produit</h2>
              </li>
              <li>
                <a href="https://tailflows.com"> Employées </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Paiement </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Planificateur </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Employées </a>
              </li>
            </ul>
          </div>
          <div class="text-gray-700">
            <ul>
              <li class="mb-4">
                <h2 class="font-bold text-lg">Liens Rapide</h2>
              </li>
              <li>
                <a href="https://tailflows.com"> FAQ </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Blog </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Services</a>
              </li>
            </ul>
          </div>
          <div class="text-gray-700">
            <ul>
              <li class="mb-4">
                <h2 class="font-bold text-lg">L'Entreprise</h2>
              </li>
              <li>
                <a href="https://tailflows.com"> Qui Sommes Nous? </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Carrière </a>
              </li>
              <li>
                <a href="https://tailflows.com"> Contact</a>
              </li>
            </ul>
          </div>
          <div class="bg-gray-100 lg:col-span-2 p-4 space-y-2">
            <h2 class="font-bold text-lg">Boîte aux lettres</h2>
            <div class="relative flex flex-row w-full rounded-xl overflow-hidden border h-12">
              <label for="email" class="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@nom.com"
                class="flex-1 bg-white h-full px-4 focus:border-none focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                class="inline-block h-full px-3 w-12 md:w-16 bg-gray-950 text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-full fill-current mx-auto"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                </svg>
              </button>
            </div>
            <p class="max-w-96 text-gray-500 font-light">
              Bonjour, nous sommes tailflows. Notre objectif est de créer le
              plus grand ecosystem tailwindcss du web. Nous espérons que nos
              efforts facilite vos tâches de dev.
            </p>
          </div>
        </div>
        <div class="h-px w-full bg-gray-900/10"></div>
        <div class="flex flex-row justify-between items-center text-sm text-gray-600">
          <a
            href="https://tailflows.com"
            class="inline-flex items-center gap-1"
          >
            <span class="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="fill-current"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10H.006q.219-.36.61-.618c.423-.278.922-.295 1.475-.314.853-.03 1.833-.064 2.86-1.068H10a8 8 0 1 0-8-8v6.443c-.604.128-1.246.422-1.906 1.135L0 17.683z"></path>
                  <path d="M10 3.962A6.04 6.04 0 0 0 3.962 10v5.845a1.7 1.7 0 0 0 .639-.245q1.115-.732.829-2.317.944 1.446.528 2.755H10a6.038 6.038 0 1 0 0-12.076"></path>
                </g>
              </svg>
            </span>
            <span class="inline-block text-xl">Portfolio</span>
          </a>

          <ul class="flex items-center gap-4">
            <li>
              <a href="https://tailflows.com" class="inline-block">
                Conditions
              </a>
            </li>
            <li>
              <a href="https://tailflows.com" class="inline-block">
                Terms
              </a>
            </li>
            <li>
              <a href="https://tailflows.com" class="inline-block">
                Politiques
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
