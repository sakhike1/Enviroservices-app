<template >
    <!-- Container for demo purpose -->
    <!-- component -->
    <section class="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
        <div data-aos="fade-up" data-aos-duration="3000" class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    Sustainable use of <br> natural resources.
                </h2>
                <p class="mt-6 text-lg text-gray-900">
                    Providing the best experience to our clients is essential to our organization. To achieve this, we
                    consistently deliver high-quality services
                </p>
                <nuxt-link to="Contact" title=""
                    class="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                    role="button">
                    <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact us
                </nuxt-link>
            </div>
        </div>

        <div class="container mx-auto 2xl:px-12">
            <img class="w-full mt-6" src="~/assets/group-of-people.png" alt="" />
        </div>
    </section>



    <!-- Container for demo purpose -->
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