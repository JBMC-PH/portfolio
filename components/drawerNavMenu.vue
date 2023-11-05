<template>
    <!-- Drawer Navmenu -->
    <div class="lg:hidden fixed top-0 left-0 right-0 z-10 pt-20 h-screen w-screen p-4 overflow-y-auto transition-transform bg-white">
        <ul class="space-y-3 mt-4">
            <li>
                <NuxtLink to="/" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about-us" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    About Us
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/services" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Services
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/how-we-work" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    How We Work
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/our-work" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Our Work
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact-us" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Contact Us
                </NuxtLink>
            </li>
        </ul>

        <ul class="space-y-3 mt-4">
            <li>
                <strong class="block text-sm px-4 pt-4 font-medium uppercase text-gray-400">
                    Our Services
                </strong>
            </li>
            <li>
                <NuxtLink to="/services" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Web Design
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/services" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Web Development
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/services" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Content Marketing
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/services" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Social Media Marketing
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/services" class="block rounded-lg px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Search Engine Optimization (SEO)
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
