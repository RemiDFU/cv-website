<template>
  <section id="about" class="about">
    <div ref="revealEl" class="container reveal">
      <p class="section-label">01 // about</p>
      <h2 class="section-title">About Me</h2>
      <div class="section-divider"></div>

      <div class="about__grid">
        <div class="about__text">
          <p>
            I'm a software engineer with five years of hands-on experience in backend
            development, SaaS platform monitoring, and site reliability engineering —
            primarily within the retail and e-commerce space.
          </p>
          <p>
            At Onestock I grew from intern to SRE, working across an Order Management
            System used by major European retailers. I built and maintained RESTful APIs,
            refactored legacy code, automated validation tooling, and developed monitoring
            solutions that kept production reliable for thousands of concurrent users.
          </p>
          <p>
            I thrive in agile, collaborative environments and enjoy the intersection of
            engineering rigour and practical problem-solving. I'm now based in Adelaide on
            a Working Holiday Visa (subclass 417) and actively looking for my next
            challenge in South Australia.
          </p>

          <div class="about__links">
            <a
              href="https://www.linkedin.com/in/rémi-dufau8995a116b/"
              target="_blank"
              rel="noopener noreferrer"
              class="about__link"
            >LinkedIn ↗</a>
            <a
              href="https://github.com/RemiDFU"
              target="_blank"
              rel="noopener noreferrer"
              class="about__link"
            >GitHub ↗</a>
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
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const revealEl = ref(null)
useScrollReveal(revealEl)

const facts = [
  { label: 'Location',    value: 'Adelaide, SA 5000' },
  { label: 'Visa',        value: 'Working Holiday 417' },
  { label: 'Experience',  value: '5+ years' },
  { label: 'Languages',   value: 'French (native) · English C1' },
  { label: 'TOEIC',       value: '975 / 990' },
  { label: 'Interests',   value: 'Tech · Sports · Reading · History' },
]
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
