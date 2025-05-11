<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const navbar = ref<HTMLElement | null>(null)

const routes: string[] = [
    'Home',
    'Studio',
    'Works',
    'News'
]

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

function onScroll(): void {
    const scrollY = window.scrollY
    if (scrollY > 300 && !navbar.value!.classList.contains('nav-scroll')) {
        navbar.value!.classList.add('nav-scroll')
    } else if (scrollY <= 300 && navbar.value!.classList.contains('nav-scroll')) {
        navbar.value!.classList.remove('nav-scroll')
    }
}

</script>

<template>
    <nav ref="navbar" class="navbar absolute left-0 top-7.5 p-0 m-0 w-full bg-transparent z-999999 transition-all">
        <div class="container flex justify-between items-center m-auto">

            <div class="flex items-center gap-4">
                <a href="#" class="navbar-logo rounded-4xl px-4 py-2 h-full w-fit block">
                    <img src="assets/imgs/Logo-light.svg" alt="logo">
                </a>

                <div class="h-full">
                    <ul class="navbar-nav rounded-4xl py-0.5 px-1 flex items-center h-full">
                        <li 
                            v-for="(item, index) in routes"
                            :key="index"
                            class="flex h-full"
                        >
                            <a 
                                class="nav-link block text-white px-5 py-1 rounded-4xl text-[14px] h-full"
                                :class="{ active: index === 0 }" 
                                href="#"
                            >
                                {{ item }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
           
            <div class="flex items-center">
                <a href="#" class="butn rounded-4xl py-2 px-5 mr-4">
                    <div class="flex items-center">
                        <span>Start Project</span>
                        <span class="ml-2.5">
                            <img src="assets/icons/arrow-top-right.svg" alt="arrow top right" height="18" width="18">
                        </span>
                    </div>
                </a>
                <button class=" cursor-pointer">
                    <img src="assets/icons/catalog-icon.svg" alt="burger">
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-scroll {
    position: fixed;
    top: -80px;
    padding: 15px 0;
    transition: transform .8s;
    transform: translateY(80px);
    backdrop-filter: blur(10px); 
}
.navbar-logo {
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.navbar-nav {
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.nav-link.active {
    background: rgba(255, 255, 255, 0.1); 
}

.butn {
    background: #fff;
    color: #1d1d1d;
}

</style>