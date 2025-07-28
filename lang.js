function switchLanguage() {
  const currentLang = document.documentElement.lang === "en" ? "no" : "en";
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-lang-en]").forEach(el => {
    el.textContent = currentLang === "en" ? el.dataset.langEn : el.dataset.langNo;
  });
}
