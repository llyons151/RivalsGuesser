class CharacterSearch {
    constructor() {
        this.initializeVariables();
        this.initialize();
    }

    async initialize() {
        this.checkForLanguage();
        this.marvelCharacters = await this.fetchMarvelCharacters();
        const storedCharacters = this.getStoredCharacters();


        // Filter out the stored characters from the marvelCharacters list
        this.notSearchedMarvelCharacters = this.marvelCharacters.filter(character => {
            const characterNames = Object.values(character.translations)
                .map(lang => lang?.name)
                .filter(Boolean); // Remove undefined values
            const storedCharacterNames = storedCharacters.map(stored => stored.translations?.en?.name).filter(Boolean);
    
            return !storedCharacterNames.some(storedName => characterNames.includes(storedName));
        });
        
        console.log("Filtered List:", this.notSearchedMarvelCharacters);             
        this.setupEventListeners();
    }

    checkForLanguage(){
        this.language = localStorage.getItem("language");
        if(this.language) return;
        localStorage.setItem("language", "en");
        this.language = "en";
    }
    initializeVariables() {
        this.characterInput = document.getElementById('characterInput');
        this.suggestedCharactersContainer = document.getElementById('suggestedCharactersContainer');
        this.characterButton = document.getElementById('character_search_button');
    }

    getCurrentPageKey() {
        const path = window.location.pathname;
        return `searched_characters_${path}`;
    }

    getStoredCharacters() {
        const pageKey = this.getCurrentPageKey();
        return JSON.parse(localStorage.getItem(pageKey)) || [];
    }

    async fetchMarvelCharacters() {
        try {
        const response = await fetch('/character_info');
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const characters = await response.json();
            return characters;
        } catch (error) {
            console.error('Failed to fetch characters:', error);
            return [];
        }
    }

    setupEventListeners() {
        this.characterInput.addEventListener('input', this.handleInput.bind(this));
        this.characterButton.addEventListener('click', this.handleButtonClick.bind(this));
        document.addEventListener('correctCharacterGuessed', () => { this.notSearchedMarvelCharacters = [] });
    }

    handleInput(event) {
        const suggestedCharacters = this.getSuggestedCharacters(event.target.value);
        this.displaySuggestions(suggestedCharacters);
    }

    getSuggestedCharacters(typedText) {
        if (!typedText) return [];
    
        const searchText = typedText.toLowerCase();
        
        return this.notSearchedMarvelCharacters.filter(character =>
            character.translations[this.language].name.toLowerCase().startsWith(searchText)
        );
    }
    displaySuggestions(suggestedCharacters) {
        this.clearSuggestions();
        if (this.shouldHideSuggestions(suggestedCharacters)) {
            this.hideSuggestionsContainer();
            return;
        }
        this.showSuggestionsContainer();
        this.createSuggestionElements(suggestedCharacters);
    }

    shouldHideSuggestions(suggestedCharacters) {
        return suggestedCharacters.length === 0 ||
            suggestedCharacters.length === this.notSearchedMarvelCharacters.length;
    }

    createSuggestionElements(suggestedCharacters) {
        suggestedCharacters.forEach(character => {
            const elementContainer = document.createElement('div');
            elementContainer.className = 'characterElementContainer';

            const element = document.createElement('div');
            element.className = 'suggestedCharacter';
            element.addEventListener('click', () => this.handleCharacterSelection(character));

            const image = document.createElement('img');
            const characterNameWithoutSpaces = character.translations['en'].name.replace(/\s+/g, '');
            image.src = `/_images/character_images/character_icon_images/${characterNameWithoutSpaces}.png`;
            image.alt = `${character.translations[this.language].name} icon`;
            image.className = 'suggestedCharacterImage';

            const characterNameText = document.createElement('div');
            characterNameText.className = 'suggestedCharacterText';
            characterNameText.textContent = character.translations[this.language].name;

            element.appendChild(image);
            element.appendChild(characterNameText);
            elementContainer.appendChild(element);
            this.suggestedCharactersContainer.appendChild(elementContainer);
        });
    }

    handleButtonClick() {
        const inputValue = this.characterInput.value.toLowerCase();
        const matchingCharacter = this.notSearchedMarvelCharacters.find(character =>
            character.translations[this.language].name.toLowerCase() === inputValue
        );

        if (matchingCharacter) {
            this.handleCharacterSelection(matchingCharacter);
        }

        this.clearInput();
        this.clearSuggestions();
    }

    handleCharacterSelection(character) {
        this.broadcastCharacterSelection(character);
        this.removeCharacterFromList(character);
        this.clearInput();
        this.clearSuggestions();
    }

    broadcastCharacterSelection(character) {
        const event = new CustomEvent('characterSelected', {
            detail: { character }
        });
        document.dispatchEvent(event);
    }

    removeCharacterFromList(character) {
        this.notSearchedMarvelCharacters = this.notSearchedMarvelCharacters.filter(c => {
            return !Object.values(c.translations).some(lang => lang.name === character.translations[this.language].name);
        });
    }

    clearInput() {
        if (this.characterInput) {
            this.characterInput.value = '';
        }
    }

    clearSuggestions() {
        if (this.suggestedCharactersContainer) {
            this.suggestedCharactersContainer.innerHTML = '';
        }
    }

    hideSuggestionsContainer() {
        if (this.suggestedCharactersContainer) {
            this.suggestedCharactersContainer.style.display = 'none';
        }
    }

    showSuggestionsContainer() {
        if (this.suggestedCharactersContainer) {
            this.suggestedCharactersContainer.style.display = 'flex';
        }
    }
}

(async () => {
    const characterSearch = new CharacterSearch();
})();
