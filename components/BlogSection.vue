<script setup lang="ts">

interface Article {
    id: number
    img: string
    tag: string
    created_at: string
    title: string
}

const articles: Article[] = [
    {
        id: 1,
        img: '/imgs/blog/1.jpg',
        tag: 'Experience',
        created_at: 'May 15, 2024',
        title: 'How to build work culture for young office?',
    },
    {
        id: 2,
        img: '/imgs/blog/2.jpg',
        tag: 'Design Trends',
        created_at: 'May 1, 2024',
        title: 'Hubfolio - Winner SOTY at CSS Winner 2023 with Zumar project',
    },
    {
        id: 3,
        img: '/imgs/blog/3.jpg',
        tag: 'Tips & Tricks',
        created_at: 'April 24, 2024',
        title: 'Rebrand vs Refesh: 10 Minutes On Brand by Hubfolio',
    }
]

</script>

<template>
    <section class="blog-section section-padding">
        <div class="container m-auto">
            <div class="sec-head mb-4.5 flex items-center justify-between">
                <h2>Our <span>Articles</span></h2>
                <a href="#" class="flex gap-2.5 rounded-4xl px-6 py-3 butn">
                    <span>See All Articles</span>
                    <img src="assets/icons/chevron-right.svg" alt="Icon right">
                </a>
            </div>
            <div class="grid grid-cols-3 gap-7.5">
                <div 
                    v-for="(article, index) in articles"
                    :key="article.id"
                    class="blog-section__item h-full pt-7.5 flex flex-col justify-between gap-12.5"
                >
                    <div class="flex flex-col gap-5">
                        <div class="blog-section__item-top flex items-center">
                            <a href="#" class="tag">
                                {{ article.tag }}
                            </a>
                            <span class="dash">/</span>
                            <a href="#" class="date">
                                {{ article.created_at }}
                            </a>
                        </div>
                        <div class="text">
                            <h6>{{ article.title }}</h6>
                        </div>
                    </div>
                    <div class="h-75 relative">
                        <img 
                            :src="article.img" 
                            :alt="article.title"
                            class="w-full h-full object-cover object-center"
                        >
                        <a href="#" class="blog-section__item-icon">
                            <img src="assets/icons/arrow-top-right.svg" alt="Arrow Top Right" class="invert">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-section__item {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.blog-section__item-top {
  font-size: 14px; 
}

.blog-section__item-top .date {
    color: #808080;
}

.blog-section__item-top .dash {
    color: #808080;
    margin: 0 15px; 
}

.blog-section__item .blog-section__item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    background: var(--main-color);
    opacity: 0;
    visibility: hidden;
    transition: all .4s; 
}

.blog-section__item:hover .blog-section__item-icon {
    opacity: 1;
    visibility: visible; 
}

</style>