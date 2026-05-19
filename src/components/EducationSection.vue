<template>
  <section id="education" class="education">
    <div ref="revealEl" class="container reveal">
      <p class="section-label">04 // education</p>
      <h2 class="section-title">Education</h2>
      <div class="section-divider"></div>

      <div class="education__grid">
        <div v-for="item in education" :key="item.degree" class="education__card">
          <div class="education__badge">
            <span class="education__badge-icon" aria-hidden="true">🎓</span>
          </div>
          <div class="education__body">
            <span class="education__degree-type">{{ item.type }}</span>
            <h3 class="education__degree">{{ item.field }}</h3>
            <p class="education__school">{{ item.school }}</p>
            <p class="education__location-date">
              <span>{{ item.location }}</span>
              <span class="education__year">{{ item.year }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="certifications">
        <h3 class="certifications__title">Certifications</h3>
        <div class="certifications__list">
          <div v-for="cert in certifications" :key="cert.name" class="certifications__item">
            <span class="certifications__check" aria-hidden="true">✓</span>
            <div>
              <p class="certifications__name">{{ cert.name }}</p>
              <p class="certifications__issued">Issued {{ cert.issued }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const revealEl = ref(null)
useScrollReveal(revealEl)

const education = [
  {
    type:     'Master of Science',
    field:    'Engineering in Computer Science',
    school:   'Conservatoire National Des Arts Et Métiers',
    location: 'Toulouse, France',
    year:     '2023',
  },
  {
    type:     'Bachelor of Science',
    field:    'Computer Science',
    school:   'IPST-CNAM Toulouse INP',
    location: 'Toulouse, France',
    year:     '2021',
  },
  {
    type:     'Associate Degree',
    field:    'Computer Science',
    school:   'Université Toulouse III Paul Sabatier',
    location: 'Toulouse, France',
    year:     '2020',
  },
]

const certifications = [
  { name: 'TOEIC Score 975/990',                            issued: 'Aug 2023' },
  { name: 'White Card CPCWHS1001',                          issued: 'Nov 2025' },
  { name: 'Provide First Aid & CPR HLTAID011',              issued: 'Nov 2025' },
  { name: 'Forklift Licence TLILIC0003',                    issued: 'Jan 2026' },
]
</script>

<style scoped>
.education__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

@media (min-width: 640px) {
  .education__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .education__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.education__card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: border-color var(--transition);
}

.education__card:hover {
  border-color: var(--color-accent);
}

.education__badge {
  width: 48px;
  height: 48px;
  background: var(--color-accent-dim);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.education__degree-type {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-2);
}

.education__degree {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.education__school {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-3);
}

.education__location-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.education__year {
  font-family: var(--font-mono);
  color: var(--color-accent);
  font-weight: 600;
}

/* ── Certifications ── */
.certifications__title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.certifications__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
}

@media (min-width: 640px) {
  .certifications__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.certifications__item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}

.certifications__check {
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.certifications__name {
  font-size: 0.9rem;
  color: var(--color-text);
  font-weight: 500;
}

.certifications__issued {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin-top: var(--space-1);
  font-family: var(--font-mono);
}
</style>
