<template>
  <NuxtErrorBoundary>
    <!-- Card Blog -->
    <div data-aos="fade-down" class="max-w-[88rem]  px-4 py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->
      <h2 class="font-bold text-center pt-20  text-2xl lg:text-3xl text-green-900 dark:text-gray-400">

        Gathering and investigating test samples of <br> soil, water and air.
      </h2>
      <div class="max-w-2xl mx-auto py-20 text-center mb-10 lg:mb-14">

      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div data-aos="fade-up-right" class="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card -->
        <a class="group bg-gray-100 flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#">
          <div class="aspect-w-16 aspect-h-11  ">
            <img class="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
              alt="Image Description" />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Prepare clear and detailed reports
            </h3>
            <p class="mt-5 text-gray-600 dark:text-gray-400">
              Prepare clear and detailed written reports about field inspections.
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3"></div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a class="group bg-gray-100 flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#">
          <div class="aspect-w-16 aspect-h-11">
            <img class="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1615053835734-7752878e939e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
              alt="Image Description" />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Recommend solutions
            </h3>
            <p class="mt-5 text-gray-600 dark:text-gray-400">
              Develop and recommend solutions to eliminate pollution and environmental hazards.
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3"></div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a class="group bg-gray-100 flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#">
          <div class="aspect-w-16 aspect-h-11">
            <img class="w-full object-cover rounded-xl"
              src="https://media.istockphoto.com/id/1440274551/photo/high-angle-shot-of-a-laboratory-assistant-adding-purple-liquid-in-test-tubes.jpg?s=170667a&w=0&k=20&c=MxQ2f7egOa6Y4hUE18MGrDx3eZxZB3n85gVV1HPuQsw="
              alt="Image Description" />
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              test samples of food,
            </h3>
            <p class="mt-5 text-gray-600 dark:text-gray-400">
              Collect and analyze test samples of food, soil, water, and air
            </p>
          </div>
          <div class="mt-auto flex items-center gap-x-3"></div>
        </a>
        <!-- End Card -->
      </div>
      <!-- End Grid -->

      <!-- Card -->
      <div class="mt-12 text-center">
        <Nuxt-link to="Service"
          class="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-blue-600 hover:text-blue-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
          Read more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </Nuxt-link>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Card Blog -->
  </NuxtErrorBoundary>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({})
  }
}
</script>

<style>

</style>
