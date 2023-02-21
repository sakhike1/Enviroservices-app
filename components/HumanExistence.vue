<template><!-- Features -->
  <section data-aos="zoom-in-left" class="overflow-hidden border-none  sm:grid pt-20 sm:grid-cols-2 sm:items-center">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center sm:text-left">
        <h2 class="text-2xl font-bold text-green-900 md:text-3xl">
          Human existence is quite impossible without the presence of a healthy ecosystem
        </h2>

        <p class="hidden text-gray-500 md:mt-4 md:block">
          We’re on a mission to deliver on time To halt and reverse environmental degradation and depletion of natural
          resources, nurture the earth's ecological and cultural diversity, and secure sustainable livelihoods.
        </p>

        <div class="mt-4 md:mt-8">
          <nuxt-link to="Contact">
            <button to="Contact"
              class="rounded-full px-14 py-6 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-bg-black text-indigo-600 text-white">
              <span
                class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-green-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span class="relative text-black transition duration-300 group-hover:text-white ease">Get a qoute
              </span>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <img alt="Violin"
      src="https://media.istockphoto.com/id/607653484/photo/scientist-examing-toxic-water.jpg?s=612x612&w=0&k=20&c=ksT_OB3i5Jcd3RMWZhVFBvge97JcjK8TnWzv4dN1MGI="
      class="h-full hover:scale-95 z-40 w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]" />
  </section>


<!-- End Features --></template>

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
@media (min-width: 992px) {
  .rotate-lg-6 {
    transform: rotate(6deg);
  }
}

/* These are the KEY styles - you can add them directly to any object you want in your project */
.fancy-border-radius {
  border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
}
</style>