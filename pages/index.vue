<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

const { $gsap, $ScrollTrigger, $ScrollSmoother } = useNuxtApp()

onMounted(() => {
  $gsap.registerPlugin($ScrollTrigger, $ScrollSmoother)

  $ScrollSmoother.create({
      smooth: 2,
      effects: true,
  });

  const dot = document.getElementById('cursor-dot') as HTMLElement | null
  if (!dot) return

  let mouseX = 0 
  let mouseY = 0
  let currentX = 0 
  let currentY = 0
  let raf: number

  const animate = (): void => {
    currentX += (mouseX - currentX) 
    currentY += (mouseY - currentY) 
    if (dot.classList.contains('link-hover')) {
      dot.style.transform = `translate(${currentX}px, ${currentY}px) scale(8)`
    } else {
      dot.style.transform = `translate(${currentX}px, ${currentY}px)`
    }
    raf = requestAnimationFrame(animate)
  }

  const updateMouse = (e: MouseEvent): void => {
    mouseX = e.clientX
    mouseY = e.clientY
  }
 
  const handleLinkHover = (hovering: boolean): void => {
    if (hovering) {
      dot.classList.add('link-hover')
    } else {
      dot.classList.remove('link-hover')
    }
  }

  const links = document.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a, button')
  links.forEach(link => {
    link.addEventListener('mouseenter', () => handleLinkHover(true))
    link.addEventListener('mouseleave', () => handleLinkHover(false))
  })

  window.addEventListener('mousemove', updateMouse)
  animate()

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('mousemove', updateMouse)
    links.forEach(link => {
      link.removeEventListener('mouseenter', () => handleLinkHover(true))
      link.removeEventListener('mouseleave', () => handleLinkHover(false))
    })
  })  
})


useHead({
  title: 'Hubfolio | Marketing & SEO Studio for Creative Growth',
  meta: [
    {
      name: 'description',
      content: 'Hubfolio is a marketing agency that connects businesses with their audience'
    },
    {
      name: 'keywords',
      content: 'Hubfolio, marketing agency, SEO, branding, design, code, growth, digital marketing, creative agency.'
    },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

    { property: 'og:title', content: 'Hubfolio | Marketing & SEO Studio for Creative Growth' },
    {
      property: 'og:description',
      content: 'Connecting businesses with their audiences. Our path is one of continuous growth and creativity.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://hubfolio.agency' },
    { property: 'og:image', content: 'https://hubfolio.agency/preview.jpg' },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Hubfolio | Marketing & SEO Studio for Creative Growth' },
    {
      name: 'twitter:description',
      content: 'Connecting businesses with their audiences. Our path is one of continuous growth and creativity.'
    },
    { name: 'twitter:image', content: 'https://hubfolio.agency/preview.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://hubfolio.agency/' },
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
});


</script>

<template>
    <Teleport to="#teleports">
      <div id="cursor-dot" />
      <NavBar />
    </Teleport>
    <div class="main">
        <HeaderBanner />
        <IntroSection />
        <ServicesSection />
        <CrossingSection />
        <WorksSection />
        <ClientsSection />
        <TestimonialsSection />
        <AwardsSection />
        <AboutSection />
        <BlogSection />
    </div>
    <TheFooter />
</template>

<style>
#cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
  position: fixed;
  padding: 4px;
  background-color: #fff;
  border-radius: 50%;
  mix-blend-mode: difference;
  transition: transform 0.15s ease, opacity 0.25s ease;
}

#cursor-dot.link-hover {
  transform: translate(-50%, -50%) scale(8);
  opacity: .1;
}

.main {
    background-image: url(assets/imgs/bg-main.jpg);
    background-size: cover;
}

</style>
