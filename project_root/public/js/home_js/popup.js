import Language from './languageHandler.js';

class About {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.getIcons();
        this.listenForClicks();
        this.aboutPopupIsActive = false;
        this.howToPlayPopupIsActive = false;
        this.languagePopupIsActive = false;
        this.streakPopupIsActive = false;  // Add streak popup state

        // Load the selected language from localStorage
        Language.loadLanguage();
    }

    getIcons() {
        this.aboutIcon = document.getElementById('about_icon');
        this.howToPlayIcon = document.getElementById('how_to_play_icon');
        this.languageIcon = document.getElementById('language_icon');
        this.streakIcon = document.getElementById('streak_icon'); // Add streak icon
    }

    listenForClicks() {
        // About icon click
        this.aboutIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showAboutContainer();
            this.aboutPopupIsActive = true;
        });

        // How To Play icon click
        this.howToPlayIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showHowToPlayContainer();
            this.howToPlayPopupIsActive = true;
        });

        // Language icon click
        this.languageIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showLanguageContainer();
            this.languagePopupIsActive = true;
        });

        // Streak icon click (added functionality)
        this.streakIcon.addEventListener('click', () => {
            this.appendOverlay();
            this.showStreakContainer();
            this.streakPopupIsActive = true;
        });
    }

    getBody() {
        this.body = document.body;
    }

    appendOverlay() {
        this.getBody();
        this.darkOverlay = document.createElement('div');
        this.darkOverlay.className = 'overlay';
        this.darkOverlay.style.zIndex = '999';
        document.body.style.overflowY = 'hidden';
        document.documentElement.style.overflowY = 'hidden';
        this.body.append(this.darkOverlay);
    }

    removeOverlay() {
        this.darkOverlay.remove();
        document.body.style.overflowY = '';
        document.documentElement.style.overflowY = '';
    }

    getAboutContainer() {
        this.aboutContainer = document.getElementById('about_container');
    }

    getHowToPlayContainer() {
        this.howToPlayContainer = document.getElementById('how_to_play_container');
    }

    getLanguageContainer() {
        this.languageContainer = document.getElementById('language_container');
    }

    getStreakContainer() {
        this.streakContainer = document.getElementById('streak_container');  // Streak container
    }

    showAboutContainer() {
        this.getAboutContainer();
        this.aboutContainer.style.display = 'flex';
        this.listenForXClick();
    }

    showHowToPlayContainer() {
        this.getHowToPlayContainer();
        this.howToPlayContainer.style.display = 'flex';
        this.listenForXClick();
    }

    showLanguageContainer() {
        this.getLanguageContainer();
        this.languageContainer.style.display = 'flex';
        this.listenForXClick();
        this.listenForLanguageSelection();
    }

    showStreakContainer() {
        this.getStreakContainer();
        this.streakContainer.style.display = 'flex';
        this.listenForXClick();
    }

    removeContainer() {
        if (this.aboutPopupIsActive) {
            this.aboutContainer.style.display = 'none';
            this.aboutPopupIsActive = false;
        }
        if (this.howToPlayPopupIsActive) {
            this.howToPlayContainer.style.display = 'none';
            this.howToPlayPopupIsActive = false;
        }
        if (this.languagePopupIsActive) {
            this.languageContainer.style.display = 'none';
            this.languagePopupIsActive = false;
        }
        if (this.streakPopupIsActive) {
            this.streakContainer.style.display = 'none';  // Hide streak container
            this.streakPopupIsActive = false;
        }
    }

    listenForXClick() {
        const xIcons = document.querySelectorAll('.x_icon, .language-popup-x-icon, .streak-popup-x-icon');  // Add streak popup x-icon
        xIcons.forEach((x) => {
            x.addEventListener('click', () => {
                this.removeOverlay();
                this.removeContainer();
            });
        });
    }

    listenForLanguageSelection() {
        // Get the language dropdown
        const languageSelect = document.getElementById('language_select');

        // Listen for changes in the dropdown
        languageSelect.addEventListener('change', (e) => {
            const selectedLanguage = e.target.value;
            Language.setLanguage(selectedLanguage); 
            this.removeOverlay();
            this.removeContainer();
        });
    }
}

const about = new About();
