<template>
  <section id="hero" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__grid"></div>
      <div class="hero__glow"></div>
    </div>

    <div class="container hero__content">
      <p class="hero__pre">
        <span class="hero__prompt">{{ t('hero.pre') }}</span>
        <span class="hero__cursor" aria-hidden="true"></span>
      </p>

      <h1 class="hero__name">Remi Dufau</h1>

      <p class="hero__title">
        <span class="hero__title-bracket">&lt;</span>
        {{ t('hero.title') }}
        <span class="hero__title-bracket">/&gt;</span>
      </p>

      <p class="hero__summary">{{ t('hero.summary') }}</p>

      <div class="hero__ctas">
        <a href="#contact" class="btn btn--primary">{{ t('hero.cta_contact') }}</a>
        <a href="#experience" class="btn btn--ghost">{{ t('hero.cta_work') }}</a>
      </div>

      <div class="hero__meta">
        <span class="hero__meta-item">
          <span class="hero__meta-icon">📍</span> {{ t('hero.meta_location') }}
        </span>
        <span class="hero__meta-item">
          <span class="hero__meta-icon">🛂</span> {{ t('hero.meta_visa') }}
        </span>
        <span class="hero__meta-item">
          <span class="hero__meta-icon">🌐</span> {{ t('hero.meta_lang') }}
        </span>
      </div>
    </div>

    <a href="#about" class="hero__scroll" :aria-label="t('hero.scroll_label')">
      <span class="hero__scroll-arrow"></span>
    </a>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 64px;
}

/* ── Background ── */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero__glow {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
}

/* ── Content ── */
.hero__content {
  position: relative;
  text-align: center;
  padding-top: var(--space-7);
  padding-bottom: var(--space-8);
}

.hero__pre {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-5);
}

.hero__prompt {
  color: var(--color-accent);
}

.hero__cursor {
  display: inline-block;
  width: 8px;
  height: 1em;
  background: var(--color-accent);
  animation: blink 1.2s step-end infinite;
  vertical-align: text-bottom;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.hero__name {
  font-size: clamp(2.8rem, 10vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--color-text) 40%, var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-4);
  line-height: 1.1;
}

.hero__title {
  font-family: var(--font-mono);
  font-size: clamp(1rem, 3vw, 1.4rem);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  letter-spacing: 0.02em;
}

.hero__title-bracket {
  color: var(--color-accent);
}

.hero__summary {
  max-width: 600px;
  margin: 0 auto var(--space-7);
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

/* ── Buttons ── */
.hero__ctas {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-7);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all var(--transition);
}

.btn--primary {
  background: var(--color-accent);
  color: #0a0a0f;
}

.btn--primary:hover {
  filter: brightness(1.15);
  text-decoration: none;
}

.btn--ghost {
  background: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
}

.btn--ghost:hover {
  background: var(--color-accent-dim);
  text-decoration: none;
}

/* ── Meta badges ── */
.hero__meta {
  display: flex;
  gap: var(--space-5);
  justify-content: center;
  flex-wrap: wrap;
}

.hero__meta-item {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.hero__meta-icon {
  font-size: 0.9rem;
}

/* ── Scroll hint ── */
.hero__scroll {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  text-decoration: none;
}

.hero__scroll-arrow {
  display: block;
  width: 24px;
  height: 24px;
  border-right: 2px solid var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
  transform: rotate(45deg);
  animation: bounce 1.6s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50%       { transform: rotate(45deg) translateY(6px); }
}
</style>
