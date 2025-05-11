<script setup lang="ts">

interface Award {
    honor: string
    project: string
    date: string
}

const awards: Award[] = [
    {
        honor: 'Awwwards',
        project: 'SOTY 2023 - 1st Winner',
        date: 'May 2023'
    },
    {
        honor: 'css awards',
        project: 'Top 5 Best of eCommerce Websites 2022',
        date: 'Dec 2022'
    },
    {
        honor: 'Awwwards',
        project: 'Honor SOTD November, 2022r',
        date: 'Nov 2022'
    },
    {
        honor: 'Behance Portfolio',
        project: 'Winner - US Behance Portfolio Review 2021',
        date: 'Aug 2021'
    },
]

</script>

<template>
    <section class="awards-section section-padding pt-0">
        <div class="container m-auto">
            <div class="grid grid-cols-11 gap-28">
                <div class="col-span-4">
                    <div class="sec-head">
                        <h6 class="sub-head mb-7">Awards & Recognition</h6>
                        <h4>Efforts to receive worthy rewards, awards & recognition
                            <span class="sub-color">help us affirm our brand.</span>
                        </h4>
                    </div>
                </div>
                <div class="col-span-7 awards-section__table">
                    <div class="awards-section__table-top grid grid-cols-12 gap-3">
                        <div class="col-span-9">
                            <h6 class="awards-section__table-title sub-title">Award title</h6>
                        </div>
                        <div class="col-span-3 flex justify-end">
                            <h6 class="awards-section__table-title sub-title">Date</h6>
                        </div>
                    </div>
                    <div 
                        v-for="(award, index) in awards"
                        :key="index"
                        class="awards-section__table-item item-line grid grid-cols-12 gap-3"
                    >
                        <div class="col-span-9">
                            <div class="awards-section__table-honor">
                                <h6>{{ award.honor }}</h6>
                            </div>
                            <div class="awards-section__table-item_project">
                                <h6>{{ award.project }}</h6>
                            </div>
                        </div>
                        <div class="col-span-3 text-right">
                            <div class="awards-section__table-item_date">
                                <span>{{ award.date }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.awards-section__table-top {
    padding: 0 15px 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7); 
}
.awards-section__table-title {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: .7; 
}

.awards-section__table-item {
    padding: 25px 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    transition: all .4s;
    z-index: 3; 
}
.awards-section__table-item:hover:after {
    height: 100%; 
}
.awards-section__table-item:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(255, 255, 255, 0.05);
    transition: all .4s;
    z-index: -1; 
}
.awards-section__table-honor h6 {
    font-size: 14px; 
}
.awards-section__table-item_date span {
    font-size: 14px;
    opacity: .7; 
}

</style>