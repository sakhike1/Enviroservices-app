<template>
    <!-- Hero -->
    <section class="relative py-10 overflow-hidden">
        <div class="max-w-[87rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="max-w-2xl text-center mx-auto">
                <h data-aos="fade-up" data-aos-duration="3000"
                    class="block text-3xl font-bold text-green-1000 sm:text-4xl md:text-5xl dark:text-white">Protecting
                    and sustaining
                    the environment is <span class="text-green-900">Key</span></h>
                <p data-aos="fade-up" data-aos-duration="3000" class="mt-3 text-s text-green-900 ">cost-effective
                    environmental and ecological
                    consulting support</p>
            </div>

            <div class="container py-20 my-24 px-6 mx-auto">
                <div class="container flex flex-wrap p-8 mx-auto xl:px-0 lg:gap-10 lg:flex-nowrap">
                    <div class="flex items-center justify-center w-full lg:w-1/2">
                        <div>
                            <img alt="Benefits" src="@/assets/feature-illustration.png" loading="lazy" />
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center w-full lg:w-1/2">
                        <div>

                            <div class="w-full mt-5">
                                <div class="flex items-start mt-8 space-x-3">
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-7 h-7 text-indigo-50">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">Eco-friendly
                                            chemicals</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">Supply and application of
                                            eco-friendly chemicals on the environment(herbicides, repellant, water
                                            dye,etc).</p>
                                    </div>
                                </div>
                                <div class="flex items-start mt-8 space-x-3">
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-7 h-7 text-indigo-50">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">waste dump
                                        </h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">Removal of waste dump.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-start mt-8 space-x-3">
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-7 h-7 text-indigo-50">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">Environmental
                                            equipment</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">Supply of Environmental
                                            equipment (dust buckets, dust stands, bailers, ph meters,noise instrument..
                                        </p>
                                    </div>
                                </div>
                                <div class="flex items-start mt-8 space-x-3">
                                    <div
                                        class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-7 h-7 text-indigo-50">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">Environmental
                                            awareness</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">Environmental awareness
                                            material designs and manufacturing, banners,boardspamphlets,posters,
                                            T-shirt,etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Section: Design Block -->

            </div>
        </div>
    </section>
    <!-- End Hero -->


</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createClient } from "@supabase/supabase-js";

export default {
    mounted() {
        AOS.init({})
    },

}
</script>

<style>

</style>