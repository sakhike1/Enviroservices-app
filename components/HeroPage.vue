<template>
  <NuxtErrorBoundary>
    <!-- Features -->
    <!-- Features -->
    <!-- Container for demo purpose -->
    <div class="">

      <!-- Section: Design Block -->
      <section class="mb-32 hover:bg-gray-900">
        <div class="relative overflow-hidden hover:bg-gray-900 bg-no-repeat bg-cover" style="
            ">
          <img src="~/assets/1674470739426-0c2f4174-633e-4f55-9b6f-bd5756604247-3072.png" alt=""
            style=" height: 550px; background-position: 100%; width: 100%;">
          <div />
          <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style="background-color: rgba(0, 0, 0, 0.55)">
            <div class="flex justify-center items-center h-full">
              <div data-aos="fade-up" data-aos-duration="3000" class="text-center text-gray-300 px-6 md:px-12">
                <h2 class=" text-3xl font-bold tracking-tight leading-tight mb-12">
                  We all have a duty to <br />protect the <span class="text-green-600"> environment</span>
                </h2>
                <NuxtLink to="Service">
                  <button to="Services" type="button"
                    class="inline-block rounded-full bg-green-800 px-10 py-5  text-white font-medium text-sm leading-snug  rounded hover:bg-green-600 hover:bg-opacity-4 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                    Learn more
                  </button>
                </NuxtLink>
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