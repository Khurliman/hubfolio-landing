<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import type SwiperCore from 'swiper'
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';

const worksImages: string[] = [
  new URL('assets/imgs/works/1.jpg', import.meta.url).href,
  new URL('assets/imgs/works/2.jpg', import.meta.url).href,
  new URL('assets/imgs/works/3.jpg', import.meta.url).href,
  new URL('assets/imgs/works/5.jpg', import.meta.url).href,
  new URL('assets/imgs/works/7.jpg', import.meta.url).href,
]

interface WorkText {
    title: string
    field: string
}

const worksTexts: WorkText[] = [
    {
        title: 'The joy of music',
        field: 'Branding'
    },
    {
        title: 'Bank Rebranding',
        field: 'Branding'
    },
    {
        title: 'Carved Wood',
        field: 'Product Design'
    },
    {
        title: 'Blom Air purifier',
        field: 'Digital Art'
    },
    {
        title: 'Avocado Cutter',
        field: 'Digital Design'
    },
]

const main_slider = ref<{ $el?: { swiper?: SwiperCore } } | null>(null)
const extra_slider = ref<{ $el?: { swiper?: SwiperCore } } | null>(null)

const thumbsSwiper = ref<any>(null)

function onThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper
}

function nextSlide(): void {
    main_slider.value?.$el?.swiper?.slideNext()
    extra_slider.value?.$el?.swiper?.slideNext()
}

function prevSlide(): void {
    main_slider.value?.$el?.swiper?.slidePrev()
    extra_slider.value?.$el?.swiper?.slidePrev()
}

</script>

<template>
    <section class="works-section section-padding pt-0 overflow-hidden relative">
        <div class="container m-auto">
            <div class="sec-head mb-18">
                <div class="grid grid-cols-12">
                    <div class="col-span-5">
                        <h6 class="sub-head">Featured Works</h6>
                    </div>
                    <div class="col-span-7">
                        <h4>Our user-centered design encourages
                            <span class="sub-color">productivity & boosts revenue.</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>

        <swiper
            ref="main_slider"
            :space-between="40"
            :centeredSlides="true"
            :loop="true"
            :loopedSlides="4"
            :speed="1500"
            :modules="[Thumbs]"
            :thumbs="{ swiper: thumbsSwiper }"
            :breakpoints="{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                },
            }"
        >
            <swiper-slide
                v-for="(image, index) in worksImages"
                :key="index"
            >
                <div 
                    class="bg-img relative bg-cover bg-no-repeat bg-center h-120 overflow-hidden relative rounded-2xl" 
                    :style="{ 'background-image': `url(${image})` }"
                >
                    <a href="#" class="absolute inset-0"></a>
                </div>
            </swiper-slide>
        </swiper>

        <div class="gallery-text text-center mt-15 mx-auto z-9">
            <swiper
                ref="extra_slider"
                :spaceBetween="30"
                :slidesPerView="1"
                :loop="true"
                :loopedSlides="4"
                :touchRatio="0.2"
                :slideToClickedSlide="true"
                :speed="1500"
                :direction="'vertical'"
                :modules="[FreeMode, Thumbs]"
                watch-slides-progress
                free-mode
                @swiper="onThumbsSwiper"
            >
                <swiper-slide
                    v-for="(work, index) in worksTexts"
                    :key="index"
                >
                    <div class="w-full text-center">
                        <h4>{{ work.title }}</h4>
                        <p class="mt-4 overflow-hidden uppercase text-[14px] tracking-[2px]">
                            {{ work.field }}
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="swiper-controls absolute bottom-[140px] left-0 w-full z-9">
            <button
                class="swiper-button-next swiper-nav-ctrl cursor-pointer flex items-center absolute right-20 top-auto text-white z-9" 
                tabindex="0" role="button" aria-label="Next slide"
                @click="nextSlide"
            >
                <span class="whitespace-nowrap">Next Slide</span>
                <img src="assets/icons/chevron-right.svg" alt="Icon right">
            </button>
            <button 
                class="swiper-button-prev swiper-nav-ctrl cursor-pointer flex items-center absolute left-20 top-auto text-white z-9" 
                tabindex="0" role="button" aria-label="Previous slide"
                @click="prevSlide"
            >
                <img src="assets/icons/chevron-right.svg" alt="Icon right" class="rotate-180">
                <span class="whitespace-nowrap">Prev Slide</span>
            </button>
        </div>

    </section>
</template>

<style scoped>
.works-section .gallery-text .swiper,
.works-section .gallery-text .swiper-slide {
    height: 105px !important;
}
.works-section .gallery-text .swiper-slide {
    display: flex;
    align-items: center; 
}
.works-section .gallery-text h4 {
    font-size: 50px;
    line-height: 1; 
}
.works-section .gallery-text p {
    transform: translateY(50px);
    transition: all .8s; 
}
.works-section .gallery-text .swiper-slide-active p {
    transform: translateY(0);
    transition-delay: .5s; 
}
</style>