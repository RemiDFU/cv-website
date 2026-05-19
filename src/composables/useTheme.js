import { ref } from 'vue'

const STORAGE_KEY = 'cv-theme'
const theme = ref(localStorage.getItem(STORAGE_KEY) || 'dark')

function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
  localStorage.setItem(STORAGE_KEY, value)
  theme.value = value
}

applyTheme(theme.value)

export function useTheme() {
  function toggleTheme() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}
