<script setup lang="ts">

interface Service {
    title: string
    text: string
    icon: string
}

const services: Service[] = [
    {
        title: 'Branding',
        text: 'Brand Identity, Stragegy & Consult, <br> Position, Rebrand',
        icon: '/icons/crown-solid.svg'
    },
    {
        title: 'Design',
        text: 'Brand Identity, Stragegy & Consult, <br> Position, Rebrand',
        icon: '/icons/bezier-curve-solid.svg'
    },
    {
        title: 'Code',
        text: 'Brand Identity, Stragegy & Consult, <br> Position, Rebrand',
        icon: '/icons/code-solid.svg'
    },
    {
        title: 'Growth',
        text: 'Brand Identity, Stragegy & Consult, <br> Position, Rebrand',
        icon: '/icons/chart-line-solid.svg'
    },
]

</script>

<template>
    <section class="services-section">
        <div class="container m-auto">
            <div class="sec-head mb-18 flex items-center justify-between">
                <div>
                    <h2>Our <span>Services</span></h2>
                </div>
                <a href="#" class="flex gap-2.5 services-btn rounded-4xl px-6 py-3 butn">
                    <span>See Our Approach</span>
                    <img src="assets/icons/chevron-right.svg" alt="Icon right">
                </a>
            </div>
            <div
                v-for="(item, index) in services"
                :key="index" 
                class="services-section__item flex items-center overflow-hidden p-7.5"
            >
                <div class="services-section__item-title--bg">
                    <h2 class="services-section__item-title">{{ item.title }}</h2>
                </div>
                <div class="text ml-auto">
                    <div class="flex items-center gap-37.5">
                        <p v-html="item.text" />
                        <div class="services-section__item-icon invert flex items-center justify-center w-15 h-15 rounded-full">
                            <img :src="item.icon" :alt="item.title" class="w-7.5">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services-btn {
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.services-section__item {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  transition: all .4s; 
}

.services-section__item:last-of-type {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.services-section__item-title {
    font-size: 128px;
    line-height: 128px;
    letter-spacing: -4px;
}

.services-section__item-icon {
    border: 1px solid rgba(0, 0, 0, .1);
}

.services-section__item-title--bg {
    position: relative;
    margin-bottom: -70px;
    transition: all .4s; 
}

.services-section__item:hover {
    background: var(--bg-color); 
}

.services-section__item:hover .services-section__item-title--bg {
    margin-bottom: 0;
    color: var(--main-color); 
}

</style>