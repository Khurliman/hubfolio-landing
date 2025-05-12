<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

interface Client {
    id: number
    img: string
    name: string
    job: string
    review: string
}

const clients: Client[] = [
    {
        id: 1,
        img: 'imgs/testim/avatar1.jpg',
        name: 'Bradley Gordon',
        job: 'CEO & Founder, Archin Studio',
        review: 'Hubfolio studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!.'
    },
    {
        id: 2,
        img: 'imgs/testim/avatar2.jpg',
        name: 'Bradley Gordon',
        job: 'CEO & Founder, Archin Studio',
        review: 'Hubfolio studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!.'
    },
    {
        id: 3,
        img: 'imgs/testim/avatar3.jpg',
        name: 'Bradley Gordon',
        job: 'CEO & Founder, Archin Studio',
        review: 'Hubfolio studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity. Recommend!.'
    }
]

const activeSlideIndex = ref(0)

function onSlideChange(e: { activeIndex: number }): void {
    activeSlideIndex.value = e.activeIndex
}

</script>

<template>
    <section class="testimonials">
        <div class="container m-auto py-25 px-15 bg-(--main-color) rounded-4xl relative -top-[140px]">
            <div class="grid grid-cols-12">
                <div class="col-span-5">
                    <div class="w-max relative">
                        <div class="w-60">
                            <img src="assets/imgs/testim/Vector_Cricle_Text.svg" alt="circle text">
                        </div>
                        <div class="absolute top-1/2 left-1/2 -translate-1/2 w-25">
                            <img src="assets/imgs/testim/vector_quote.svg" alt="quote">
                        </div>
                    </div>
                </div>
                <div class="col-span-7">
                    <swiper
                        :slidesPerView="1"
                        :spaceBetween="30"
                        :speed="1500"
                        :loop="true"
                        :pagination="{
                            el: '.testimonials .swiper-pagination',
                            clickable: true
                        }"
                        :modules="[Autoplay]"
                        :autoplay="{ delay: 5000, disableOnInteraction: false }"
                        @slideChange="onSlideChange"
                    >
                        <swiper-slide
                            v-for="client in clients"
                            :key="client.id"
                        >
                            <div class="item">
                                <div class="text">
                                    <h4>“{{ client.review }}”</h4>
                                 </div>
                                <div class="flex items-center mt-10 pt-7.5 bord-thin-top-light">
                                    <div>
                                        <div class="rounded-full w-12.5 h-12.5 overflow-hidden">
                                            <img :src="client.img" :alt="client.name">
                                        </div>
                                    </div>
                                    <div class="pl-5">
                                        <span>{{ client.name }}</span>
                                        <p class="text-[14px] text-[#BBB] mt-1">{{ client.job }}</p>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>

                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                            <span 
                                v-for="(_, index) in clients"
                                :key="index"
                                tabindex="0" 
                                role="button" 
                                aria-label="Go to slide 1" 
                                class="swiper-pagination-bullet " 
                                :class="{'swiper-pagination-bullet-active': activeSlideIndex === index}"
                            />
                        </div>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.testimonials .swiper {
    position: relative; 
}
.testimonials .swiper .swiper-pagination {
    position: absolute;
    bottom: 0;
    right: 0;
    left: auto !important;
    width: -webkit-max-content !important;
    width: -moz-max-content !important;
    width: max-content !important;
    padding: 5px 15px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1); 
}
.testimonials .swiper .swiper-pagination .swiper-pagination-bullet {
    margin: 0 7px;
    background: #BBBBBB; 
}
.testimonials .swiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: var(--main-color); 
}

</style>