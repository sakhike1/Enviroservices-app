<template>
    <section class="bg-gradient-to-r from-rose-100 to-teal-100">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex items-center justify-center px-4 py-10  sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to Celebration</h2>
                    <p class="mt-2 text-base text-gray-600">Already have an account? <Nuxt-link to="Login" title=""
                            class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</Nuxt-link>
                    </p>

                    <form action="#" method="POST" class="mt-8">
                        <div class="space-y-5">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Full Name </label>
                                <div class="mt-2.5">
                                    <input type="text" name="" id="" placeholder="Enter your full name"
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                <div class="mt-2.5">
                                    <input type="email" name="" id="" placeholder="Enter email to get started"
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Password </label>
                                <div class="mt-2.5">
                                    <input type="password" name="" id="" placeholder="Enter your password"
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                </div>
                            </div>

                            <div class="flex items-center">
                                <input type="checkbox" name="agree" id="agree"
                                    class="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded" />

                                <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                                    I agree to Postcraft’s <a href="#" title=""
                                        class="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a>
                                    and <a href="#" title=""
                                        class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                                </label>
                            </div>

                            <div>
                                <button type="submit"
                                    class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    Create free account
                                </button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000"
                class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24  sm:px-6 lg:px-8">
                <div>

                    <img class="w-full mx-auto" src="~/assets/6913-removebg-preview.png" alt="" />


                </div>
            </div>
        </div>
    </section>


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