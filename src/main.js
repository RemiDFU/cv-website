import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import en from './locales/en.json'
import fr from './locales/fr.json'
import './assets/styles/variables.css'
import './assets/styles/base.css'
import './assets/styles/animations.css'

const savedLocale = localStorage.getItem('cv-locale')

const i18n = createI18n({
  legacy: false,
  locale: savedLocale || 'en',
  fallbackLocale: 'en',
  messages: { en, fr },
})

createApp(App).use(i18n).mount('#app')
