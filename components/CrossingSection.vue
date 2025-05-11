<script setup lang="ts">

const list: string[] = [
    'Top-notch Experts',
    'Dedicated Support 24/7',
    'Flexible Pricing',
    'Top-notch Experts',
    'AI-Driven Solutions',
    'Flexiable Price'
]

</script>

<template>
    <div class="section-padding crossing-section">
        <div 
            v-for="(_, index) in 2"
            :key="index"
            class="overflow-hidden py-6"
            :class="index === 0 ? 'bg-(--main-color) rotate-2 relative z-4' : 'bg-(--bg-color) -rotate-4 -mt-7.5'"
        >
            <div class="slide-har flex relative">
                <div
                    v-for="(_, i) in 3"
                    :key="i" 
                    class="relative flex"
                    :class="index === 0 ? 'animate-(--moveLeft)' : 'animate-(--moveRight)'"
                >
                    <div 
                        v-for="(item, ii) in list"
                        :key="ii"
                        class="crossing-section__item relative px-15"
                    >
                        <h5 class="font-normal uppercase whitespace-nowrap">
                            {{ item }}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.crossing-section__item:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%); 
}

</style>