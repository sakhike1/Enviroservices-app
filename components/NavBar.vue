<template>
    <div>
      <div class="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200">
        <nav
          class="
            container
            px-6
            py-8
            text-white
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div class="flex items-center justify-between">
            <router-link
              to="/"
              class="
                text-xl
                font-bold
                text-white
                md:text-2xl
                hover:text-blue-400
              "
              ><img class="object-fit h-20 w-23" src="@/assets/img.png" alt="">
        
            </router-link>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            "
          >
            <li class="text-sm font-bold text-gray-500 hover:text-blue-400">
              what we do 
            </li>
            <li class="text-sm font-bold text-gray-500 hover:text-blue-400">
              Services
            </li>
            <li class="text-sm font-bold text-gray-500 hover:text-blue-400">
              Projects done
            </li>
            <li class="text-sm font-bold text-gray-500 hover:text-blue-400">
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>
  