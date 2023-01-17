<template>
  <NuxtErrorBoundary>
    <!-- Features -->
    <!-- Features -->
    <!-- Container for demo purpose -->
    <div data-aos="fade-up-right" class="">

      <!-- Section: Design Block -->
      <section class="mb-32">
        <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
              background-position: 50%;
              background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/006.webp');
              height: 550px;
            ">
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.75)">
            <div class="flex justify-center items-center h-full">
              <div class="text-center text-gray-400 px-6 md:px-12">
                <h2 class="text-4xl font-bold tracking-tight leading-tight mb-12">
                  We all have a duty which is to <br /><span>protect the environment</span>
                </h2>
                <Nuxt-Link to="Services">
                  <button type="button"
                    class="inline-block rounded-full bg-green-800 px-10 py-5  text-white font-medium text-sm leading-snug  rounded hover:bg-green-600 hover:bg-opacity-4 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Learn more
                  </button>
                </Nuxt-Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>

    <!-- End Features -->
    <!-- End Features -->
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
.px-20 {
  padding-left: 5rem;
  padding-right: 2rem;
  height: 600px;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 10px;
}


.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
}
</style>