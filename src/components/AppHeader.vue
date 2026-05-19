<template>
  <header class="header">
    <div class="container header__inner">
      <a href="#hero" class="header__logo">
        <span class="header__logo-bracket">&lt;</span>RD
        <span class="header__logo-bracket">/&gt;</span>
      </a>

      <nav class="header__nav" aria-label="Main navigation">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="header__nav-link">
          {{ link.label }}
        </a>
      </nav>

      <div class="header__controls">
        <button
          class="header__toggle"
          :aria-label="theme === 'dark' ? t('header.aria_theme_dark') : t('header.aria_theme_light')"
          @click="toggleTheme"
        >
          <span v-if="theme === 'dark'">☀</span>
          <span v-else>☾</span>
        </button>

        <button
          class="header__toggle"
          :aria-label="locale === 'en' ? t('header.aria_lang_en') : t('header.aria_lang_fr')"
          @click="toggleLocale"
        >
          <span class="header__lang">{{ locale === 'en' ? 'FR' : 'EN' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme.js'
import { useI18n } from 'vue-i18n'

const { theme, toggleTheme } = useTheme()
const { locale, t } = useI18n()

const LOCALE_KEY = 'cv-locale'

function toggleLocale() {
  const next = locale.value === 'en' ? 'fr' : 'en'
  locale.value = next
  localStorage.setItem(LOCALE_KEY, next)
}

const navLinks = computed(() => [
  { href: '#about',      label: t('nav.about') },
  { href: '#experience', label: t('nav.experience') },
  { href: '#skills',     label: t('nav.skills') },
  { href: '#education',  label: t('nav.education') },
  { href: '#contact',    label: t('nav.contact') },
])
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  transition: background var(--transition);
}

[data-theme="light"] .header {
  background: rgba(244, 244, 248, 0.85);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: var(--space-4);
}

.header__logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 0.02em;
  text-decoration: none;
  white-space: nowrap;
}

.header__logo-bracket {
  color: var(--color-accent);
}

.header__nav {
  display: flex;
  gap: var(--space-5);
}

.header__nav-link {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition);
}

.header__nav-link:hover {
  color: var(--color-accent);
  text-decoration: none;
}

.header__controls {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.header__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 1rem;
  cursor: pointer;
  transition: border-color var(--transition), background var(--transition), color var(--transition);
}

.header__toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.header__lang {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

/* Mobile: hide nav links, keep controls */
@media (max-width: 640px) {
  .header__nav {
    display: none;
  }
}
</style>
