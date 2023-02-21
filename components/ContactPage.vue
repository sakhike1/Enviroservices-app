<template>
    <section class="hover:bg-gray-900">
        <div class="relative overflow-hidden hover:bg-gray-900 bg-no-repeat bg-cover" style="
                                                                                    ">
            <img src="~/assets/bg.png" alt="" style=" height: 900px; background-position: 100%; width: 100%;">






            <div class="absolute pt-20 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.55)">

                <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div data-aos="fade-up" data-aos-duration="3000" class="text-white mt-8 lg:w-1/2 lg:mx-6">
                        <h1 class="text-3xl font-semibold capitalize lg:text-4xl">
                            For any environmental needs
                        </h1>

                        <p class="max-w-xl text-xs text-gray-200 mt-6">
                            As the increase in temperature is concerning, there is a need to
                            keep a watch on the toxic compounds we ingest that pollute the
                            atmosphere. We need to adopt environmentally sustainable methods
                            to minimise
                            <Nuxt-link to="Sales">
                                <button
                                    class="max-w-xl text-xs text-gray-200 mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Speak to expects
                                </button>
                            </Nuxt-link>
                        </p>

                    </div>

                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div data-aos="fade-up" data-aos-duration="3000"
                            class="w-full bg-gradient-to-r from-gray-100 to-gray-200 px-10 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                            <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200">
                                Contact Us
                            </h1>

                            <p class="mt-4 text-gray-500 dark:text-gray-400">
                                Ask us everything and we would love to hear from you
                            </p>

                            <form @submit.prevent="submitForm" class="mt-6">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full
                                        Name</label>
                                    <input type="text" v-model="name" required placeholder="Name"
                                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div class="flex-1 mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email
                                        address</label>
                                    <input type="email" v-model="email" required placeholder="Email"
                                        class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div class="w-full mt-6">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea type="message" v-model="message" required
                                        class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        placeholder="Message"></textarea>
                                </div>

                                <button
                                    class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    <input type="submit" value="Send Message">
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div />
</section>
<!-- Container for demo purpose --></template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createClient } from "@supabase/supabase-js";


export default {
    mounted() {
        AOS.init({})
    },
    data() {
        return {
            FormData: {
                name: '',
                email: '',
                message: ''

            },
        }
    },
    methods: {
        async submitForm() {
            const supabase = createClient('https://fkwcupzorassszwjghru.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrd2N1cHpvcmFzc3N6d2pnaHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxMTI5OTgsImV4cCI6MTk5MDY4ODk5OH0.9q6voKu1B0YCBeHQ6rPt6peGSxSxZTeGtq38x3X_gdw')
            await supabase.from('contacts').insert({ name: this.name, email: this.email, message: this.message })
            alert('Message sent thank you !')
            this.$router.push('home')
        }
    }
}
</script>

<style></style>
