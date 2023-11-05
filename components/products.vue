<script setup>
    const projects = ref([
        {
            title: 'CASSAREAL',
            description: 'Cassareal is a comprehensive online platform for real estate that provides a seamless and efficient way for users to buy, sell, and rent properties.',
            category: 'Real Estate',
            image: 'https://drive.google.com/uc?id=15hV1tW2Y7ZBOE5w_V_QbaBYtH9__xyUk',
            permalink: 'https://sandbox.cassareal.com/',
            viewable: true,
        },
        {
            title: 'Academe LMS',
            description: 'Academe AI E-Learning Management System (eLMS) is a cloud-based learning management system (LMS) that helps educational institutions and organizations deliver online courses and training.',
            category: 'Website + LMS Platform',
            image: 'https://drive.google.com/uc?id=14AWFoKDJoCVxfXkj4ofxHOIRP0kZQzea',
            permalink: 'https://academelms.com/',
            viewable: true
        },
        {
            title: 'Rosas Garden Hotel',
            description: 'Rosas Garden Hotel is a 24-room hotel located in the heart of Manila, Philippines. It is within walking distance to many popular tourist attractions, including Rizal Park, Intramuros, and Manila Bay. The hotel also offers a variety of amenities, including a restaurant, live music, and a piano bar.',
            category: 'Website',
            image: 'https://drive.google.com/uc?id=1qr2RgXqtd8-YbKJvzIg7N493l8ygWzlj',
            permalink: 'https://rosasgardenhotel.com/',
            viewable: true
        },
        {
            title: 'PELCO II',
            description: 'Pampanga II Electric Cooperative, Inc., is an electric cooperative that serves seven municipalities in the province of Pampanga, Philippines: Mabalacat City, Guagua, Lubao, Porac, Santa Rita, Sasmuan, and Bacolor.',
            category: 'Website + CMS',
            image: 'https://drive.google.com/uc?id=1Zr3423_x-yM6HVyUGicmiWuo2gmtqLz4',
            permalink: 'https://pelco2.com/',
            viewable: true
        },
        {
            title: 'OLMCMC',
            description: 'Our Lady of Mount Carmel Medical Center. It is a private, tertiary hospital located in San Fernando City, Pampanga, Philippines. It is a member of the Carmel Medical Center Group, which also includes hospitals in Clark, Pampanga and Tarlac.',
            category: 'Website + CMS',
            image: 'https://drive.google.com/uc?id=17ZU5UIUEhichdamNdXlNkbmAK3oXleUA',
            permalink: 'https://olmcmc.gocloudgroup.com/',
            viewable: true
        },
        {
            title: 'Millennial Resorts',
            description: 'Millennial Resorts is a Philippine-based hospitality company that develops and operates sustainable resorts and experiential accommodations. It is a sister company of Landco Pacific Corporation, a leading property developer in the Philippines.',
            category: 'Website',
            image: 'https://drive.google.com/uc?id=1wQNvAJ51L73WiWUEdhyIU4zRNUPfO3TO',
            permalink: 'https://millennial-resorts.com/',
            viewable: true
        },
        {
            title: 'Pampanga Colleges Inc.',
            description: 'Pampanga Colleges Inc. (PCI) is a non-stock, non-profit educational institution located in Macabebe, Pampanga, Philippines. It was founded in 1937 by Don Fidel Isip Sr., a prominent businessman and philanthropist.',
            category: 'Website',
            image: 'https://drive.google.com/uc?id=17Pud2JUDNw1Z-QxCuyXlVHHe3jEBi14k',
            permalink: 'https://pampangacolleges.edu.ph/',
            viewable: true
        },
        {
            title: 'AUDA',
            description: 'All Universal Dropshipping Access (AUDA) is a dropshipping membership site that provides its members with access to a wide range of dropshipping suppliers and products. AUDA also offers a variety of tools and resources to help its members start and grow their dropshipping businesses.',
            category: 'Ecommerce Dropshipping Platform',
            image: 'https://drive.google.com/uc?id=1djzlEMEIpCSetZjMY2EV39F9AhDd5Ygw',
            permalink: 'https://gitmarkpaul.github.io/ecommerce-vite/',
            viewable: true
        },
        {
            title: 'Niterra Philippines Inc.',
            description: 'Niterra Philippines Inc. is the exclusive importer and distributor of Niterra products in the Philippines. Niterra is a global leader in ignition and sensor technology, providing high-quality spark plugs, glow plugs, spark plug caps, cables, and sensors.',
            category: 'Website',
            image: 'https://drive.google.com/uc?id=14v5x60f6rT52moReQK4iT7WE3QG5BDoM',
            permalink: 'https://www.ngkntk.com.ph/',
            viewable: true
        },
        {
            title: 'Lance Collection',
            description: 'Lance Collection is a lighting store and manufacturer based in Makati, Philippines. They offer a wide range of lighting products, including chandeliers, droplights, floor lamps, and table lamps. Their products are known for their high quality and stylish designs.',
            category: 'Ecommerce',
            image: 'https://drive.google.com/uc?id=1oPBwF8zwK3CZW5qYG5vvuycTBumdb_OF',
            permalink: 'https://lancecollection.com/',
            viewable: true
        },
        {
            title: 'SLUBHS Batch 72',
            description: 'SLUBHS 72 Golden Anniversary is the 50th anniversary of the Saint Louis University Batch of 1972. It is a significant milestone for the batch, and they are planning a number of events to celebrate the occasion.',
            category: 'Website + Blog + CMS',
            image: 'https://drive.google.com/uc?id=1qTMKqsSU9fi-ufdSNvSokyd9dzuN_Nmg',
            permalink: 'https://slubhs72.com/',
            viewable: true
        },
        {
            title: 'A3G Construction',
            description: 'A3G Construction and Trading Corporation is a construction company based in Magalang, Pampanga, Philippines. The company specializes in the design and construction of residential and commercial buildings.',
            category: 'Website + Blog + CMS',
            image: 'https://drive.google.com/uc?id=1sT8JA-tJqb4-LQd1GIG7FkPjgBykA-s4',
            permalink: 'http://a3gconstruction.com/',
            viewable: true
        },
        {
            title: 'Chatbrain',
            description: 'ChatBrain is an advanced Artificial Intelligence (AI) tool designed for chat applications.',
            category: 'AI + ChatGPT Integration',
            image: 'https://drive.google.com/uc?id=1gy_KVV5IRw0CtmO8hagchZkMzMVKEA4-',
            permalink: '',
            viewable: false
        }
    ])
</script>

<template>
    <div v-for="project in projects" :key="project.title" class="relative group grid h-[32rem] w-full flex-col items-end justify-start overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none transition-all duration-300 ease-in-out group-hover:scale-125" :style="`background-image: url('${project.image}')`">
            <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/90 via-black/80"></div>
        </div>
        <div class="relative p-6 px-6 py-8 lg:px-12">
            <h2 class="mb-3 block font-sans text-2xl lg:text-4xl md:text-3xl font-medium tracking-normal text-white antialiased">
                {{ project.title }}
            </h2>
            <p class="text-white line-clamp-3 text-sm md:text-base">{{ project.description }}</p>
            <h5 class="block mb-4 mt-6 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-300">
                {{ project.category }}
            </h5>
            <div class="lg:absolute lg:bottom-8 lg:right-6 lg:hidden lg:group-hover:flex">
                <NuxtLink v-if="project.viewable" :to="project.permalink" target="__blank" rel="noopener" class="button-secondary relative rounded-full w-full lg:w-fit">
                    Visit 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z"/></svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>