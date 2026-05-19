<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </main>
  <footer class="site-footer">
    <p class="site-footer__text">
      <span class="site-footer__mono">Remi Dufau</span> · Adelaide, SA ·
      Built with Vue 3 + Vite
    </p>
  </footer>
</template>

<script setup>
import AppHeader       from './components/AppHeader.vue'
import HeroSection     from './components/HeroSection.vue'
import AboutSection    from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection   from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection  from './components/ContactSection.vue'
</script>

<style>
main {
  padding-top: 64px; /* offset fixed header */
}

.site-footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) 0;
  text-align: center;
}

.site-footer__text {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.site-footer__mono {
  font-family: var(--font-mono);
  color: var(--color-accent);
}
</style>
