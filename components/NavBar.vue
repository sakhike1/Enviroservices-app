<template>
  <NuxtErrorBoundary>
    <div>
      <div class="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200">
        <nav class="
          container
          px-6
          py-6
          text-white
          mx-auto
          md:flex md:justify-between md:items-center
        ">
          <div class="flex items-center justify-between">
            <router-link to="/" class="
              text-xl
              font-bold
              text-white
              md:text-2xl
              hover:text-blue-400
            "><img class="object-fit h-20 w-23" src="@/assets/img.png" alt="">

            </router-link>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button type="button" class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                  </path>
                </svg>
              </button>
            </div>
          </div>


          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          ">
            <Nuxt-Link to="/" class="text-sm active font-bold text-gray-500 hover:text-gray-400">
              Home
            </Nuxt-Link>
            <Nuxt-Link to="Services" class="text-sm font-bold text-gray-500 hover:text-gray-400">
              Services
            </Nuxt-Link>

            <Nuxt-Link to="Number" class="text-sm font-bold text-gray-500 hover:text-gray-400">
              About
            </Nuxt-Link>
            <Nuxt-Link to="Contact" class="text-sm font-bold text-gray-500 hover:text-gray-400">
              Contact
            </Nuxt-Link>

            <Nuxt-link to="SignIn" :disabled="loading"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Client Zone
            </Nuxt-link>

          </ul>
        </nav>
      </div>
    </div>
  </NuxtErrorBoundary>
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


<style>

</style>
