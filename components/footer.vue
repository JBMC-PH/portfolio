<template>
    <footer class="bg-gray-800">
        <div class="container py-12">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p class="font-semibold text-gray-400">Quick Link</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <NuxtLink to="/" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Home</NuxtLink>
                        <NuxtLink to="/about-us" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Who We Are</NuxtLink>
                        <NuxtLink to="/services" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Our Services</NuxtLink>
                        <NuxtLink to="/how-we-work" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">How We Work</NuxtLink>
                        <NuxtLink to="/contact-us" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Contact Us</NuxtLink>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Services</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Web Design</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Web Development</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Content Marketing</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Social Media Marketing</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Search Engine Optimization (SEO)</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Contact Us</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">(+63) 999-917-0757</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">jbmc.inquiry@gmail.com</a>
                    </div>
                </div>
            </div>
            
            <hr class="my-6 border-gray-500 md:my-10">
            
            <div class="flex flex-col items-center justify-between sm:flex-row">
                <p class="mt-4 text-sm text-gray-300 sm:mt-0">© Copyright 2023 JBMC. All Rights Reserved.</p>

                <div class="flex mt-3 -mx-2 sm:mt-0">
                    <NuxtLink to="/terms-and-conditions" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Terms of Use</NuxtLink>
                    <NuxtLink to="/privacy-policy" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Privacy Policy</NuxtLink>
                    <a href="#" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
</template>