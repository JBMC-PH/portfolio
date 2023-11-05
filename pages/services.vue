<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24">
        <div class="container">
            <h2 class="text-2xl font-bold text-gray-800 capitalize lg:text-3xl" data-aos="fade-up" data-aos-duration="100">
                Our Services
            </h2>

            <p class="mt-4 text-gray-500 xl:mt-3" data-aos="fade-up" data-aos-duration="500">
                Providing you with systems to process industry relevant data
            </p>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 md:grid-cols-2 xl:grid-cols-3" data-aos="fade-up">
                <Services></Services>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metaTitle = ref('Our Services')
    const metaDescription = ref('From communications, digital, development & product, we are a full service agency.')

    useSeoMeta({
        title: metaTitle,
        ogTitle: metaTitle,
        description: metaDescription,
        ogDescription: metaDescription,
    })
</script>

<style lang="scss" scoped>

</style>