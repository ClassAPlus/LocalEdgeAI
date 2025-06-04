
    const langSwitcher = document.getElementById("lang-switcher");
    const translatableElements = document.querySelectorAll("[data-en]");
    
    function updateLanguage(lang) {
      if (lang === "he") {
        document.documentElement.lang = "he";
        langSwitcher.textContent = "English";
        langSwitcher.style.background = "#fff";
        langSwitcher.style.color = "#1ccfcf";
      } else {
        document.documentElement.lang = "en";
        langSwitcher.textContent = "עברית";
        langSwitcher.style.background = "#1ccfcf";
        langSwitcher.style.color = "#fff";
      }
      
      translatableElements.forEach(el => {
        if (el.getAttribute("data-translate") === "false") {
          return;
        }
        if (el.tagName === "BUTTON") {
          el.textContent = el.getAttribute("data-" + lang);
        } else {
          el.innerHTML = el.getAttribute("data-" + lang);
        }
      });
      
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach(card => {
        if (lang === "he") {
          card.classList.add("rtl-service");
        } else {
          card.classList.remove("rtl-service");
        }
      });
    }
    
    langSwitcher.addEventListener("click", () => {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === "en" ? "he" : "en";
      updateLanguage(newLang);
    });
    
    // Initialize with English
    updateLanguage("en");
 
    document.querySelectorAll('.scroll-to-contact').forEach(btn => {
      btn.addEventListener('click', event => {
        event.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      });
    });
