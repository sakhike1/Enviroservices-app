<template >
    <!-- Container for demo purpose -->
    <!-- component -->
    <section data-aos="fade-up-right" class="py-10 bg-white sm:py-16 lg:py-24">
        <div data-aos="fade-up-right" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div data-aos="fade-up-right"
                class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                <div data-aos="fade-up-right" class="relative lg:mb-12">
                    <img data-aos="fade-up-right" class="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                        alt="" />
                    <div class="pl-12 pr-6">
                        <img class="relative"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                            alt="" />
                    </div>
                    <div class="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                        <div class="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                            <div class="px-3 py-4 sm:px-5 sm:py-8">
                                <div class="flex items-start">
                                    <p class="text-3xl sm:text-4xl">👋</p>
                                    <blockquote class="ml-5">
                                        <p class="text-sm font-medium text-white sm:text-lg">“Working with you guys was
                                            a wow factor amazing team delivered on time.”</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up-right" class="2xl:pl-16">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">We
                        make working with us easy </h2>
                    <p class="text-sm leading-relaxed text-gray-900 mt-9">We have a reputation of always going above and
                        beyond to ensure that our customers are completely satisfied. our transparency in our business
                        practices and customer service is what sets us apart from our competitors. give us a call on
                        <span class=" text-bold text-black"> 0875245322 </span>
                    </p>

                </div>
            </div>
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