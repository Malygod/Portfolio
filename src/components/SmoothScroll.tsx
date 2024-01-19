// smoothScroll.tsx

export function activateScrollAnimation(targetId: string, animationClass: string) {
    if (typeof document !== 'undefined') {
      const targetDiv = document.getElementById(targetId);
  
      function isElementInViewport(el: HTMLElement) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
  
      function handleScroll() {
        if (targetDiv && isElementInViewport(targetDiv)) {
          targetDiv.classList.add(animationClass);
          window.removeEventListener('scroll', handleScroll);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Llama a handleScroll inicialmente para verificar si el div es visible al cargar la página
    }
  }