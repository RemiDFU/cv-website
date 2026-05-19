<template>
  <section id="about" class="about">
    <div ref="revealEl" class="container reveal">
      <p class="section-label">{{ t('about.label') }}</p>
      <h2 class="section-title">{{ t('about.title') }}</h2>
      <div class="section-divider"></div>

      <div class="about__grid">
        <div class="about__text">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>

          <div class="about__links">
            <a
              href="https://www.linkedin.com/in/r%C3%A9mi-dufau-8995a116b/"
              target="_blank"
              rel="noopener noreferrer"
              class="about__link"
            >{{ t('about.linkedin') }}</a>
            <a
              href="https://github.com/RemiDFU"
              target="_blank"
              rel="noopener noreferrer"
              class="about__link"
            >{{ t('about.github') }}</a>
          </div>
        </div>

        <div class="about__facts">
          <div v-for="fact in facts" :key="fact.label" class="about__fact">
            <span class="about__fact-label">{{ fact.label }}</span>
            <span class="about__fact-value">{{ fact.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t, tm } = useI18n()
const revealEl = ref(null)
useScrollReveal(revealEl)

const facts = computed(() => tm('about.facts'))
</script>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-7);
}

@media (min-width: 1024px) {
  .about__grid {
    grid-template-columns: 3fr 2fr;
    align-items: start;
  }
}

.about__text p {
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
  font-size: 1.025rem;
  line-height: 1.8;
}

.about__links {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-5);
}

.about__link {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: background var(--transition);
}

.about__link:hover {
  background: var(--color-accent-dim);
  text-decoration: none;
}

/* ── Facts card ── */
.about__facts {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: 0;
}

.about__fact {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border);
}

.about__fact:last-child {
  border-bottom: none;
}

.about__fact-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.about__fact-value {
  font-size: 0.95rem;
  color: var(--color-text);
}
</style>
