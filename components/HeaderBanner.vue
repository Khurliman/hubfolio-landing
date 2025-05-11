<template>
    <header class="header">
        <div class="container m-auto">
            <div class="flex py-30 relative">
                <h1 class="text-[120px] leading-[1.2] w-full">Marketing <br> & SEO studio</h1>
                <div class="pt-10 pr-10 text-pretty">
                    <p>Connecting businesses with their audiences, and individuals with their dreams. Our
                        path forward is one of continuous growth</p>
                </div>
                <div class="absolute z-2 -bottom-20 right-0 w-55">
                    <img src="assets/imgs/header/circle-text.svg" alt="circle text">
                    <img 
                      src="assets/imgs/header/union.svg" 
                      alt="union" 
                      class="absolute top-1/2 left-1/2 -translate-1/2 w-20"
                    >
                </div>
            </div>
        </div>
        <div class="mimg overflow-hidden relative h-150">
            <img 
              src="assets/imgs/header/bg1.jpg" 
              alt="header" 
              class="w-full h-full object-cover object-center"
            >
            <div class="header__lg-text"></div>
            <svg height="0" width="0">
                <defs>
                    <clipPath id="svgTextPath">
                        <text x="50" y="200" textLength="1000px" font-family="Inter" font-size="220px" font-weight="700"> HUBFOLIO </text>
                    </clipPath>
                </defs>
            </svg>
        </div>
    </header>
</template>

<style scoped>
.header__lg-text {
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  clip-path: url(#svgTextPath);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  transform: translateX(30%) translateY(60%); 
}
</style>