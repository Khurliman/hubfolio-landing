<script setup lang="ts">

const clients: string[] = [
    '/imgs/clients/1.svg',
    '/imgs/clients/2.svg',
    '/imgs/clients/3.svg',
    '/imgs/clients/4.svg',
    '/imgs/clients/5.svg',
]

</script>

<template>
    <section class="clients-section section-padding">
        <div class="container m-auto">
            <div class="sec-head mb-18">
                <h6 class="sub-head">partner with +150 brands</h6>
            </div>
            <div class="grid grid-cols-5 gap-2.5">
                <div 
                    v-for="(client, index) in clients"
                    :key="index"
                    class="clients-section__item flex items-center justify-center relative h-full py-12.5 px-7.5"
                >
                    <div class="max-w-25 m-auto">
                        <img :src="client" :alt="`Client-${index+1}`">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.clients-section {
    background: var(--bg-color);
    padding-bottom: 280px !important;
    border-radius: 30px 30px 0 0;
}
.clients-section__item {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 80px;
}

</style>