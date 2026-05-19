<template>
  <section id="contact" class="contact">
    <div ref="revealEl" class="container reveal">
      <p class="section-label">05 // contact</p>
      <h2 class="section-title">Get In Touch</h2>
      <div class="section-divider"></div>

      <div class="contact__grid">
        <!-- Info -->
        <div class="contact__info">
          <p class="contact__intro">
            I'm currently open to new opportunities in Adelaide or remote roles.
            Whether you have a position in mind or just want to connect, feel
            free to reach out — I'll get back to you promptly.
          </p>

          <div class="contact__details">
            <a href="mailto:remi.dufau.au@gmail.com" class="contact__detail">
              <span class="contact__detail-icon" aria-hidden="true">✉</span>
              <span>remi.dufau.au@gmail.com</span>
            </a>
            <a href="tel:+61493982802" class="contact__detail">
              <span class="contact__detail-icon" aria-hidden="true">✆</span>
              <span>+61 493 982 802</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rémi-dufau8995a116b/"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__detail"
            >
              <span class="contact__detail-icon" aria-hidden="true">in</span>
              <span>linkedin.com/in/rémi-dufau</span>
            </a>
            <a
              href="https://github.com/RemiDFU"
              target="_blank"
              rel="noopener noreferrer"
              class="contact__detail"
            >
              <span class="contact__detail-icon" aria-hidden="true">⌥</span>
              <span>github.com/RemiDFU</span>
            </a>
          </div>
        </div>

        <!-- Form -->
        <div class="contact__form-wrap">
          <form
            v-if="!submitted"
            class="contact__form"
            novalidate
            @submit.prevent="handleSubmit"
          >
            <div class="form__field" :class="{ 'form__field--error': errors.name }">
              <label for="contact-name" class="form__label">Name</label>
              <input
                id="contact-name"
                v-model.trim="form.name"
                type="text"
                class="form__input"
                placeholder="Your name"
                autocomplete="name"
                @blur="validateField('name')"
              />
              <p v-if="errors.name" class="form__error">{{ errors.name }}</p>
            </div>

            <div class="form__field" :class="{ 'form__field--error': errors.email }">
              <label for="contact-email" class="form__label">Email</label>
              <input
                id="contact-email"
                v-model.trim="form.email"
                type="email"
                class="form__input"
                placeholder="you@example.com"
                autocomplete="email"
                @blur="validateField('email')"
              />
              <p v-if="errors.email" class="form__error">{{ errors.email }}</p>
            </div>

            <div class="form__field" :class="{ 'form__field--error': errors.message }">
              <label for="contact-message" class="form__label">Message</label>
              <textarea
                id="contact-message"
                v-model.trim="form.message"
                class="form__input form__textarea"
                placeholder="Tell me about the role or project…"
                rows="5"
                @blur="validateField('message')"
              ></textarea>
              <p v-if="errors.message" class="form__error">{{ errors.message }}</p>
            </div>

            <p v-if="submitError" class="form__error form__error--global">{{ submitError }}</p>

            <button type="submit" class="btn btn--primary form__submit" :disabled="sending">
              <span v-if="sending">Sending…</span>
              <span v-else>Send Message</span>
            </button>
          </form>

          <!-- Success state -->
          <div v-else class="contact__success">
            <span class="contact__success-icon" aria-hidden="true">✓</span>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. I'll reply as soon as possible.</p>
            <button class="btn btn--ghost" @click="reset">Send another</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const revealEl = ref(null)
useScrollReveal(revealEl)

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)
const sending   = ref(false)
const submitError = ref('')

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateField(field) {
  if (field === 'name') {
    errors.name = form.name.length >= 2 ? '' : 'Please enter your name.'
  }
  if (field === 'email') {
    errors.email = EMAIL_RE.test(form.email) ? '' : 'Please enter a valid email address.'
  }
  if (field === 'message') {
    errors.message = form.message.length >= 10 ? '' : 'Message must be at least 10 characters.'
  }
}

function validateAll() {
  validateField('name')
  validateField('email')
  validateField('message')
  return !errors.name && !errors.email && !errors.message
}

async function handleSubmit() {
  if (!validateAll()) return
  sending.value = true
  submitError.value = ''
  try {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    submitted.value = true
  } catch {
    submitError.value = 'Something went wrong. Please try emailing me directly.'
  } finally {
    sending.value = false
  }
}

function reset() {
  form.name = ''
  form.email = ''
  form.message = ''
  errors.name = ''
  errors.email = ''
  errors.message = ''
  submitted.value = false
  submitError.value = ''
}
</script>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-7);
}

@media (min-width: 1024px) {
  .contact__grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.contact__intro {
  color: var(--color-text-muted);
  font-size: 1.025rem;
  line-height: 1.8;
  margin-bottom: var(--space-6);
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact__detail {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-text-muted);
  font-size: 0.95rem;
  text-decoration: none;
  transition: color var(--transition);
}

.contact__detail:hover {
  color: var(--color-accent);
  text-decoration: none;
}

.contact__detail-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-accent);
  flex-shrink: 0;
  background: var(--color-surface);
}

/* ── Form ── */
.contact__form-wrap {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.form__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.form__input {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: 0.95rem;
  width: 100%;
  transition: border-color var(--transition);
  outline: none;
}

.form__input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.form__input:focus {
  border-color: var(--color-accent);
}

.form__field--error .form__input {
  border-color: #ff5e7a;
}

.form__textarea {
  resize: vertical;
  min-height: 120px;
}

.form__error {
  font-size: 0.8rem;
  color: #ff5e7a;
  font-family: var(--font-mono);
}

.form__error--global {
  text-align: center;
}

.form__submit {
  width: 100%;
  justify-content: center;
  font-size: 0.9rem;
  padding: var(--space-3) var(--space-6);
  cursor: pointer;
}

.form__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ── Success ── */
.contact__success {
  text-align: center;
  padding: var(--space-7) var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.contact__success-icon {
  font-size: 3rem;
  color: var(--color-accent);
  display: block;
  width: 72px;
  height: 72px;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact__success h3 {
  font-size: 1.4rem;
  color: var(--color-text);
}

.contact__success p {
  color: var(--color-text-muted);
}
</style>
