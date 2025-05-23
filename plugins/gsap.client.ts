import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'


export default defineNuxtPlugin(() => {
    return {
        provide: {
            gsap,
            ScrollTrigger,
            ScrollSmoother,
        }
    }
})
