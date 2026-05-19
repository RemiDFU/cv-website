<template>
  <section id="skills" class="skills">
    <div class="container">
      <p class="section-label">03 // skills</p>
      <h2 class="section-title">Skills</h2>
      <div class="section-divider"></div>

      <div class="skills__grid">
        <div v-for="group in skillGroups" :key="group.title" class="skills__group">
          <h3 class="skills__group-title">{{ group.title }}</h3>
          <div class="skills__chips">
            <span v-for="skill in group.items" :key="skill" class="skills__chip">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'SQL', 'MongoDB', 'OOP'],
  },
  {
    title: 'APIs & Tools',
    items: ['RESTful APIs', 'Postman', 'Docker', 'Git', 'Datadog', 'Jira'],
  },
  {
    title: 'Practices',
    items: [
      'SaaS Monitoring',
      'Microservices',
      'Backend Development',
      'Log Analysis',
      'Testing & Debugging',
      'Agile / Scrum',
      'Kanban',
      'Automation Testing',
    ],
  },
  {
    title: 'Platforms & OS',
    items: ['Linux', 'Windows', 'E-commerce / OMS'],
  },
]
</script>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 640px) {
  .skills__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .skills__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.skills__group {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
}

.skills__group-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.skills__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.skills__chip {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-text);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-1) var(--space-3);
  transition: border-color var(--transition), color var(--transition);
}

.skills__chip:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>
