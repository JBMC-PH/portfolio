<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24">
        <div class="container flex flex-col items-center mx-auto text-center">
            <h2 class="section-title text-gradient" data-aos="fade-up" data-aos-duration="100">
                Mission
            </h2>

            <p class="max-w-4xl mt-6 text-center text-base text-gray-500" data-aos="fade-up" data-aos-duration="200">
                To empower businesses to thrive in the digital age by providing comprehensive and innovative solutions that drive growth, enhance user experiences, and achieve their online goals.
            </p>
        </div>
    </section>

    <section class="py-24 bg-gray-50">
        <div class="container flex flex-col items-center xl:flex-row">
            <div class="flex justify-center xl:w-1/2">
                <img class="h-auto w-auto sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-lg" src="/logo.png" alt="JBMC">
            </div>

            <div class="flex flex-col text-center xl:text-start mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 class="section-title text-gradient">
                    Who We Are
                </h2>

                <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    At JBMC, we are passionate about empowering businesses to thrive in the digital age. We offer a comprehensive suite of services designed to help businesses of all sizes achieve their online goals.
                </p>
                <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    Our team of experienced professionals is committed to providing our clients with the highest quality service and support. We take the time to understand your unique business needs and develop customized strategies that deliver tangible results.
                </p>
                <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    Whether you're looking to enhance your online presence, expand your reach, or streamline your operations, JBMC is here to help you achieve your business objectives.
                </p>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="container">
            <h2 class="section-title text-gradient">Core Values</h2>
            <p class="mt-4 text-gray-500 xl:mt-3 lg:max-w-2xl">We pursue excellence in everything we do, constantly innovate to stay ahead, conduct business with integrity and transparency, foster collaboration within our team and with our clients, and always prioritize the needs and satisfaction of our customers.</p>

            <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                    <div class="space-y-3">
                        <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Innovation</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            We embrace innovation as a means to stay at the forefront of technology and solve problems creatively.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Integrity</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            We conduct business with integrity, transparency, and the highest ethical standards.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Collaboration</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            We believe in the power of collaboration, both with our clients and within our team, to achieve the best results.
                        </p>
                    </div>

                    <div class="space-y-3">
                        <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl dark:text-white dark:bg-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Customer-Centric</h1>

                        <p class="text-gray-500 dark:text-gray-300">
                            We put our customers at the center of our operations, striving to exceed their expectations and deliver value consistently.
                        </p>
                    </div>
                </div>

                <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                    <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 hidden">
        <div class="container">
            <h2 class="section-title text-center">
                Our <span class="text-gradient">Executive Team</span>
            </h2>

            <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div class="flex flex-col items-center sm:-mx-4 sm:flex-row">
                        <div class="w-24 h-24 rounded-full bg-gray-50 sm:mx-4 ring-4 ring-gray-300">
                            
                        </div>

                        <div class="mt-4 sm:mx-4 sm:mt-0">
                            <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">arthur melo</h1>

                            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">design director</p>
                        </div>
                    </div>
                </div>

                <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div class="flex flex-col items-center sm:-mx-4 sm:flex-row">
                        <div class="w-24 h-24 rounded-full bg-gray-50 sm:mx-4 ring-4 ring-gray-300">
                            
                        </div>

                        <div class="mt-4 sm:mx-4 sm:mt-0">
                            <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Amelia. Anderson</h1>

                            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Marketing Manager</p>
                        </div>
                    </div>
                </div>

                <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div class="flex flex-col items-center sm:-mx-4 sm:flex-row">
                        <div class="w-24 h-24 rounded-full bg-gray-50 sm:mx-4 ring-4 ring-gray-300">

                        </div>

                        <div class="mt-4 sm:mx-4 sm:mt-0">
                            <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">El Angelo Ferrer</h1>

                            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Software Engineer</p>
                        </div>
                    </div>
                </div>

                <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-gray-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div class="flex flex-col items-center sm:-mx-4 sm:flex-row">
                        <div class="w-24 h-24 rounded-full bg-gray-50 sm:mx-4 ring-4 ring-gray-300">
                            <!-- <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""> -->
                        </div>

                        <div class="mt-4 sm:mx-4 sm:mt-0">
                            <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Mark Paul Cañeda</h1>

                            <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Front-end Engineer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metaTitle = ref('About Us')
    const metaDescription = ref('We’re a group of passionate individuals that love a challenge.')

    useSeoMeta({
        title: metaTitle,
        ogTitle: metaTitle,
        description: metaDescription,
        ogDescription: metaDescription,
    })
</script>

<style lang="scss" scoped>

</style>