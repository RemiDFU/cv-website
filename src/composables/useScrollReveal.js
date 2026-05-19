import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(getEl, options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options
  let observer = null

  onMounted(() => {
    const el = typeof getEl === 'function' ? getEl() : getEl?.value
    if (!el) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
