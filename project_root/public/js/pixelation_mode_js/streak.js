import { numberToChinese } from "/js/global_js/num_to_chinese.js";
import { globalTranslations } from '../global_js/language_js/language.js';

class Streak {

    constructor() {
        this.firstDayPixelationGuessed = localStorage.getItem("firstDayPixelationGuessed");
        if (!this.firstDayPixelationGuessed) {
            this.firstDayPixelationGuessed = false;
        } else {
            this.firstDayPixelationGuessed = true;
        }
        this.language = localStorage.getItem('language');
        this.initialize();
    }

    async initialize() {
        await this.getStreakFromStorage();
        await this.getDayTracker();
        await this.getTodaysNumber();
        await this.getYesterdaysNumber();
        await this.appendStreak();
        this.isGameCompleted();
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getStreakFromStorage() {
        this.storedStreak = localStorage.getItem("pixelation_streak");
        this.bestStoredStreak = parseInt(localStorage.getItem("best_pixelation_streak")) || 0;

        this.currentStreakDisplay = document.getElementById("current_streak");
        this.bestStreakDisplay = document.getElementById("best_streak");

        if (!this.storedStreak) {
            this.storedStreak = 1;
            this.addStreakToStorage();
        }
    }

    addStreakToStorage() {
        localStorage.setItem("pixelation_streak", this.storedStreak);
        localStorage.setItem("best_pixelation_streak", this.bestStoredStreak);
    }

    async getDayTracker() {
        this.dayTracker = await this.fetchData("day_tracker");
        if (this.dayTracker === null) {
            console.warn("Day tracker data could not be fetched.");
            this.dayTracker = 0;
        }
    }

    async getTodaysNumber() {
        this.todaysPixelationNumber = localStorage.getItem("todaysPixelationNumber");
        if (!this.todaysPixelationNumber) {
            this.todaysPixelationNumber = this.dayTracker;
            localStorage.setItem("todaysPixelationNumber", this.todaysPixelationNumber);
        }
    }

    async getYesterdaysNumber() {
        this.yesterdaysPixelationNumber = localStorage.getItem("todaysPixelationNumber");
        if (!this.yesterdaysPixelationNumber) {
            this.yesterdaysPixelationNumber = this.dayTracker;
            localStorage.setItem("yesterdaysPixelationNumber", this.yesterdaysPixelationNumber);
        }
    }

    addToStreak() {
        this.newDay = this.isNewDay();
        if (!this.newDay) return;
        if (parseInt(this.dayTracker, 10) - parseInt(this.todaysPixelationNumber, 10) === 1) {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
        } else if (this.dayTracker != 0) {
            this.storedStreak = 2;
        } else {
            this.storedStreak = parseInt(this.storedStreak) + 1;
            this.addStreakToStorage();
            localStorage.setItem("firstDayPixelationGuessed", true);
            this.firstDayPixelationGuessed = true;
        }
        this.updatedStoredDays();
        this.appendStreak();
    }

    updatedStoredDays() {
        localStorage.setItem("yesterdaysPixelationNumber", this.todaysPixelationNumber);
        localStorage.setItem("todaysPixelationNumber", this.dayTracker);
        localStorage.setItem("pixelation_streak", this.storedStreak);
        localStorage.setItem("best_pixelation_streak", this.bestStoredStreak);
    }

    isNewDay() {
        if (this.dayTracker == 0 && this.firstDayPixelationGuessed == false) return true;
        return this.todaysPixelationNumber != this.dayTracker;
    }

    appendStreak() {
        if (this.storedStreak == 0) return;
        if (this.storedStreak >= this.bestStoredStreak) {
            this.bestStoredStreak = this.storedStreak;
        }
        this.currentStreakDisplay.innerHTML = this.getTranslation('currentStreak', this.language) + " " + this.translatedNumber(this.storedStreak - 1);
        this.bestStreakDisplay.innerHTML = this.getTranslation('bestStreak', this.language) + " " + this.translatedNumber(this.bestStoredStreak - 1);
    }

    translatedNumber(number) {
        this.language = localStorage.getItem('language');
        if (this.language != 'zh') {
            return number;
        }
        return numberToChinese(number);
    }

    getTranslation(key, lang) {
        return globalTranslations[lang]?.[key] || key;
    }

    isGameCompleted() {
        document.addEventListener('correctCharacterGuessed', async (event) => {
            this.addToStreak();
        });
    }
}

const streak = new Streak();
