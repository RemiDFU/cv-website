<template>
  <section id="projects" class="projects">
    <div ref="revealEl" class="container reveal">
      <p class="section-label">{{ t('projects.label') }}</p>
      <h2 class="section-title">{{ t('projects.title') }}</h2>
      <div class="section-divider"></div>

      <div class="projects__list">
        <article v-for="project in projects" :key="project.name" class="project-card">
          <div class="project-card__header">
            <div class="project-card__meta">
              <h3 class="project-card__name">{{ project.name }}</h3>
              <span class="project-card__period">{{ project.period }}</span>
            </div>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link"
              :aria-label="`${project.name} on GitHub`"
            >
              <span class="project-card__link-icon">⌥</span> GitHub ↗
            </a>
          </div>

          <p class="project-card__summary">{{ project.summary }}</p>

          <ul class="project-card__bullets">
            <li v-for="bullet in project.bullets" :key="bullet" class="project-card__bullet">
              {{ bullet }}
            </li>
          </ul>

          <div class="project-card__stack">
            <span
              v-for="tag in project.stack"
              :key="tag"
              class="project-card__tag"
            >{{ tag }}</span>
          </div>
        </article>
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

const projects = computed(() => tm('projects.items'))
</script>

<style scoped>
.projects__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* ── Card ── */
.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: border-color var(--transition);
}

.project-card:hover {
  border-color: var(--color-accent);
}

/* ── Header row ── */
.project-card__header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.project-card__meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.project-card__name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-accent);
}

.project-card__period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background var(--transition);
  white-space: nowrap;
}

.project-card__link:hover {
  background: var(--color-accent-dim);
  text-decoration: none;
}

.project-card__link-icon {
  font-size: 0.9rem;
}

/* ── Summary ── */
.project-card__summary {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-5);
  font-style: italic;
}

/* ── Bullets ── */
.project-card__bullets {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.project-card__bullet {
  position: relative;
  padding-left: var(--space-4);
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.project-card__bullet::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-size: 0.85rem;
}

/* ── Stack tags ── */
.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.project-card__tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-accent);
  background: var(--color-accent-dim);
  border-radius: var(--radius-md);
  padding: var(--space-1) var(--space-3);
}
</style>
