<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { $gsap, $ScrollTrigger, $ScrollSmoother } = useNuxtApp()

const container = ref<HTMLElement | null>(null)
const imageContainer = ref<HTMLElement | null>(null)
const imageContent = ref<HTMLElement | null>(null)
const textContainer = ref<HTMLElement | null>(null)

onMounted(() => {
    $gsap.registerPlugin($ScrollTrigger)
    
    $gsap.to(textContainer.value, {
        scrollTrigger: {
            trigger: imageContainer.value,
            start: 'top top',
            end: () => `+=${textContainer.value!.clientHeight - imageContent.value!.clientHeight}`,
            pin: true,
            scrub: true,
        },
    })
})


</script>

<template>
    <section ref="container" class="about-section flex">
        <div ref="imageContainer">
            <div ref="imageContent" class="about-section__img"></div>
        </div>
        <div ref="textContainer" class="about-section__content">
            <div class="about-section__item sec-head mb-25 mt-50">
                <h6 class="sub-head sub-color mb-5">Our Experience</h6>
                <h3>We help creative agencies, designers, and other creative people to connect with potential clients.</h3>
                <div class="flex items-end pt-12.5 mt-25 bord-thin-top-light">
                    <h2 class="about-section__item-h2">12</h2>
                    <h6 class="about-section__item-h6 ml-auto">Years of <br> experience</h6>
                </div>
            </div>
            <div class="about-section__item sec-head mb-25 mt-50">
                <h6 class="sub-head sub-color mb-5">Our Successfully</h6>
                <h3>We are a passionate team of designers and developers.</h3>
                <div class="flex items-end pt-12.5 mt-25 bord-thin-top-light">
                    <h2 class="about-section__item-h2">64</h2>
                    <h6 class="about-section__item-h6 ml-auto">Projects <br> Completed</h6>
                </div>
            </div>
            <div class="about-section__item sec-head mt-50">
                <h6 class="sub-head sub-color mb-5">Our Growth</h6>
                <h3>Commitment to Innovation and Growth.</h3>
                <div class="flex items-end pt-12.5 mt-25 bord-thin-top-light">
                    <h2 class="about-section__item-h2">180<span class="about-section__item-span">%</span></h2>
                    <h6 class="about-section__item-h6 ml-auto">Conversions <br> growth increased.</h6>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-section__img {
    background-image: url("assets/imgs/about.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 50vw; 
}
.about-section__content {
    padding: 60px 60px 0;
    width: 50vw;
}
.about-section__item-h2 {
    font-size: 100px;
    font-weight: 600;
    line-height: 1;
    opacity: .1;
}
.about-section__item-span {
    font-size: 80px; 
}
.about-section__item-h6 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-bottom: 15px; 
}

</style>