<template>

    <section class="min-h-screen bg-cover" style="
      background-image: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    ">
        <div class="flex flex-col min-h-screen bg-black/60">
            <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
                <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                    <div data-aos="fade-up" data-aos-duration="3000" class="text-white lg:w-1/2 lg:mx-6">
                        <h1 class="text-3xl font-semibold capitalize lg:text-4xl">
                            For any environmental needs
                        </h1>

                        <p class="max-w-xl text-xs text-gray-200 mt-6">
                            As the increase in temperature is concerning, there is a need to
                            keep a watch on the toxic compounds we ingest that pollute the
                            atmosphere. We need to adopt environmentally sustainable methods
                            to minimise
                        </p>
                        <Nuxt-link to="Sales">
                            <button
                                class="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                Give us a call
                            </button>
                        </Nuxt-link>
                    </div>

                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div data-aos="fade-up" data-aos-duration="3000"
                            class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                            <h1 class="text-2xl font-medium text-gray-700 dark:text-gray-200">
                                Contact Us
                            </h1>

                            <p class="mt-4 text-gray-500 dark:text-gray-400">
                                Ask us everything and we would love to hear from you
                            </p>

                            <form @submit.prevent="submitForm" class="mt-6">
                                <div class="flex-1">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
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
    </section>
    <!-- Container for demo purpose -->
</template>

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
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        async submitForm() {
            const supabase = createClient('https://clfplvyghcshgxhctwdk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZnBsdnlnaGNzaGd4aGN0d2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4MTc2NjAsImV4cCI6MTk4OTM5MzY2MH0.MaDnZcvlbcfPH5gRAORmPBITz-2k9m2It-GHGKezmiI')
            await supabase.from('contacts').insert({ name: this.name, email: this.email, message: this.message })
            alert('Message sent thank you !')
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
