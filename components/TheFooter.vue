<script setup lang="ts">

const routes: string[] = [
    'Home',
    'Studio',
    'Works',
    'News'
]

</script>

<template>
    <footer class="footer">
        <div class="container section-padding m-auto">
            <div class="grid grid-cols-5 gap-30">
                <div class="col-span-2">
                    <div>
                        <h6>Be the first to get the latest news <br> about trends, inspiration &amp; more</h6>
                        <div class="mt-15 mb-[15px] relative">
                            <label 
                                for="email_subscribe"
                                class="text-[14px] mb-2.5 block"
                            >
                                Email Address
                            </label>
                            <input 
                                id="email_subscribe" 
                                type="email" 
                                placeholder="Enter your email address" 
                                name="email_subscribe"
                                class="outline-0 border-0 py-5 pl-5 pr-12.5 bg-(--bg-color) rounded-md w-full text-white"
                            >
                            <button 
                                type="submit" 
                                class="invert border-0 absolute bottom-5 right-[15px] width-[25px]"
                            >
                                <img src="assets/icons/paper-plane.svg" alt="send">
                            </button>
                        </div>
                        <span class="text-[#808080] text-[13px]">By subscribing, you're accept our <a href="#" class="text-white underline">Privacy Policy</a></span>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="grid grid-cols-2 gap-10">
                        <div class="item mb-15 flex flex-col gap-[5px]">
                            <h6 class="mb-4">Work Inquiry</h6>
                            <p class="text-[14px]">contact@hubfolio.agency</p>
                            <p class="text-[14px]">+0685689696</p>
                        </div>
                        <div class="item mb-15 flex flex-col gap-[5px]">
                            <h6 class="mb-4">Open Position</h6>
                            <p class="text-[14px]">Senior Front-end Wordpress Developer</p>
                            <p class="text-[14px]">UI/UX Designer (Remote)</p>
                        </div>
                        <div class="item flex flex-col gap-[5px]">
                            <h6 class="mb-4">Mahattan, NY</h6>
                            <p class="text-[14px]">152 Thatcher Road St, Mahattan NY 10463 United States</p>
                        </div>
                        <div class="item flex flex-col gap-[5px]">
                            <h6 class="mb-4">Links</h6>
                            <p class="text-[14px]"><a href="#">Terms &amp; Conditions</a></p>
                            <p class="text-[14px]"><a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom pt-12.5 pb-12.5">
            <div class="container m-auto">
                <div class="grid grid-cols-12">
                    <div class="col-span-8">
                        <div class="flex items-center">
                            <div>
                                <div class="w-[25px]">
                                    <img src="assets/imgs/Logo-f.svg" alt="logo">
                                </div>
                            </div>
                            <div class="ml-12.5">
                                <p class="text-[14px]">© 2024 <a href="#" class="text-white">Hubfolio Agency</a>. <br> All Right Reserved</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 flex justify-end">
                        <div class="sub-color flex justify-between w-full">
                            <a 
                                v-for="(route, index) in routes"
                                :key="index"
                                href="#" 
                                class="text-[14px]"
                                :class="{'text-white': index === 0}"
                            >
                                {{ route }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    border-color: rgba(255, 255, 255, 0.3);
}

.footer__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}
</style>