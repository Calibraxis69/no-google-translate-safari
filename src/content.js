(function () {
  // Deshacer textos traducidos dinámicamente si Google los inyecta en el DOM
  const cleanTranslations = () => {
    document.querySelectorAll('[data-data-original-text]').forEach((el) => {
      const original = el.getAttribute('data-data-original-text');
      if (original) {
        el.textContent = original;
      }
    });
  };

  const observer = new MutationObserver(cleanTranslations);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();