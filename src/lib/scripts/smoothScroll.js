// Utility to scroll to hash after navigation (for SvelteKit)
export function scrollToHashIfPresent(offset = 0) {
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    // Wait for DOM update
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  }
}
