<template>
    <InnerPage :title="metaTitle" :text="metaDescription"></InnerPage>

    <section class="py-24">
        <div class="container">
            <div class="hidden flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-16">
                <NuxtLink to="/" class="button-primary rounded-full">
                    All
                </NuxtLink>
                <NuxtLink to="/" class="button-secondary rounded-full">
                    Ecommerce
                </NuxtLink>
                <NuxtLink to="/" class="button-secondary rounded-full">
                    Real Estate
                </NuxtLink>
                <NuxtLink to="/" class="button-secondary rounded-full">
                    Websites
                </NuxtLink>
                <NuxtLink to="/" class="button-secondary rounded-full">
                    Resorts
                </NuxtLink>
            </div>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2" data-aos="fade-up">
                <Products />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const metaTitle = ref('Our Works')
    const metaDescription = ref('Providing you with systems to process industry relevant data')

    useSeoMeta({
        title: metaTitle,
        ogTitle: metaTitle,
        description: metaDescription,
        ogDescription: metaDescription,
    })
</script>

<style lang="scss" scoped>

</style>