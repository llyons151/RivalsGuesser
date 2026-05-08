import { translations } from './language.js';

export class Language {
    constructor() {
        this.loadLanguage();
    }

    loadLanguage() {
        const storedLanguage = localStorage.getItem('language') || 'en';
        this.applyLanguage(storedLanguage);
    }

    applyLanguage(language) {
        const langData = translations[language];
        if (!langData) return;
        this.updatePageContent(langData);
    }

    updatePageContent(langData) {
        document.title = langData.title || document.title;

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");

            if (langData[key]) {
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.placeholder = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            } else {
                console.warn(`No translation found for key: "${key}"`);
            }
        });
    }
}

export default new Language();
