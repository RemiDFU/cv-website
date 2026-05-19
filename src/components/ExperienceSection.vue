<template>
  <section id="experience" class="experience">
    <div ref="revealEl" class="container reveal">
      <p class="section-label">{{ t('experience.label') }}</p>
      <h2 class="section-title">{{ t('experience.title') }}</h2>
      <div class="section-divider"></div>

      <div class="timeline">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="timeline__item"
          :class="{ 'timeline__item--featured': featuredIndices.has(index) }"
        >
          <div class="timeline__marker" aria-hidden="true">
            <div class="timeline__dot"></div>
            <div class="timeline__line"></div>
          </div>

          <div class="timeline__card">
            <div class="timeline__header">
              <div>
                <h3 class="timeline__role">{{ job.role }}</h3>
                <p class="timeline__company">
                  {{ job.company }}
                  <span class="timeline__location"> · {{ job.location }}</span>
                </p>
              </div>
              <span class="timeline__period">{{ job.period }}</span>
            </div>

            <ul class="timeline__bullets">
              <li v-for="bullet in job.bullets" :key="bullet" class="timeline__bullet">
                {{ bullet }}
              </li>
            </ul>
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

const jobs = computed(() => tm('experience.jobs'))
const featuredIndices = new Set([1, 2])
</script>

<style scoped>
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline__item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: var(--space-4);
}

/* ── Marker (dot + line) ── */
.timeline__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-surface-2);
  border: 2px solid var(--color-border);
  flex-shrink: 0;
  margin-top: 6px;
  transition: border-color var(--transition), background var(--transition);
}

.timeline__item--featured .timeline__dot {
  background: var(--color-accent);
  border-color: var(--color-accent);
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
}

.timeline__line {
  flex: 1;
  width: 2px;
  background: var(--color-border);
  margin: var(--space-2) 0;
}

.timeline__item:last-child .timeline__line {
  display: none;
}

/* ── Card ── */
.timeline__card {
  padding-bottom: var(--space-7);
}

.timeline__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.timeline__role {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.timeline__item--featured .timeline__role {
  color: var(--color-accent);
}

.timeline__company {
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.timeline__location {
  font-style: italic;
}

.timeline__period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-md);
  white-space: nowrap;
}

/* ── Bullets ── */
.timeline__bullets {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.timeline__bullet {
  position: relative;
  padding-left: var(--space-4);
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.timeline__bullet::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 0.85rem;
}
</style>
