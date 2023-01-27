<template>
  <footer class="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200">
    <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
      <!-- Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div class="col-span-full lg:col-span-1">
          <img class="object-fit h-20 w-23" src="@/assets/img.png" alt="">
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <h4 class="font-semibold text-gray-100">Product</h4>

          <div class="mt-3 grid space-y-3">

            <p> <Nuxt-Link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                to="Service">Services</Nuxt-Link>
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <h4 class="font-semibold text-gray-100">Mpilo Enviroservices</h4>

          <div class="mt-3 grid space-y-3">
            <p><nuxt-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to="Team">About us</nuxt-link>
            </p>
            <p><nuxt-link class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" to="Contact">Careers</nuxt-link>
              <span class="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">We're hiring</span>
            </p>

          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-2">


          <form>
            <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
              <div class="w-full">
                <label for="hero-input" class="sr-only">Search</label>
                <input type="text" id="hero-input" name="hero-input"
                  class="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email">
              </div>
              <button
                class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                href="#">
                <input type="button" value="Send Message" required
                  onClick="alert( 'Thanks for subscribing', );window.location='/';">

              </button>
            </div>

          </form>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-400">© 2022 Mpilo Enviroservices. All rights reserved.</p>
        </div>
        <!-- End Col -->

        <!-- Social Brands -->

        <!-- End Social Brands -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>