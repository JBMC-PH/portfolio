<template>
    <section class="pb-32 py-48 bg-gradient-to-br from-blue-50 via-pink-50 to-red-50 backdrop-blur-md">
        <div class="container">
            <div class="flex flex-col text-center xl:max-w-xl mx-auto">
                <h1 class="flex flex-col text-4xl text-gray-600 font-bold animate__animated animate__fadeInUp">
                    {{ title }}
                </h1>

                <p class="mt-6 text-base text-gray-600 md:text-lg animate__animated animate__fadeInUp" v-if="text">
                    {{ text }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
    defineProps({
        title: String,
        text: String,
    })
</script>

<style lang="scss" scoped>

</style>