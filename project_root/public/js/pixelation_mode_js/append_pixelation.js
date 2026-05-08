class GetPixelation {
    constructor() {
        this.initializeVariables();
        this.initialize();
    }

    async initialize() {
        this.language = localStorage.getItem('language');
        try {
            this.dailyCharacter = await this.fetchData('./daily_pixelation_character');
            if (!this.dailyCharacter) throw new Error('Failed to fetch daily character.');
            this.checkForStoredPixelSize();
            this.removeSpaces(this.dailyCharacter);

            this.getCanvas();
            if (!this.canvas) throw new Error('Pixelation canvas element not found.');

            await this.loadCharacterImage(this.removedSpacesCharacterName);
            this.drawPixelated();

            this.listenForCharacterSelect();
        } catch (error) {
            console.error('Error initializing GetPixelation:', error);
        }
    }

    initializeVariables() {
        // Smaller pixelSize = more pixelated. Reveal grows by pixelSizeRate per guess.
        this.pixelSize = 6;
        this.pixelSizeRate = 2;
        this.maxPixelSize = 200;
        this.removedSpacesCharacterName = '';
        this.canvas = null;
        this.ctx = null;
        this.sourceImage = null;
    }

    async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            return response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    checkForStoredPixelSize() {
        const stored = localStorage.getItem('pixelSize');
        if (stored != null && !Number.isNaN(parseFloat(stored))) {
            this.pixelSize = parseFloat(stored);
        }
    }

    getCanvas() {
        this.canvas = document.getElementById('pixelation_canvas');
        if (!this.canvas) {
            console.error('Pixelation canvas element not found in DOM.');
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.canvas.draggable = false;
        this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    loadCharacterImage(character) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                this.sourceImage = img;
                resolve();
            };
            img.onerror = () => reject(new Error(`Failed to load character image for ${character}`));
            img.src = `/_images/character_images/hero_profile_images/character_image/${character}.png`;
        });
    }

    drawPixelated() {
        if (!this.sourceImage || !this.ctx) return;

        const displayWidth = this.canvas.clientWidth || 260;
        const displayHeight = this.canvas.clientHeight || 260;
        this.canvas.width = displayWidth;
        this.canvas.height = displayHeight;

        // Downsample width in pixels — small = chunky pixelation.
        const downW = Math.max(1, Math.round(this.pixelSize));
        const aspect = this.sourceImage.height / this.sourceImage.width;
        const downH = Math.max(1, Math.round(downW * aspect));

        // Off-screen low-res canvas.
        const small = document.createElement('canvas');
        small.width = downW;
        small.height = downH;
        const sctx = small.getContext('2d');
        sctx.imageSmoothingEnabled = false;
        sctx.drawImage(this.sourceImage, 0, 0, downW, downH);

        // Upscale onto display canvas with nearest-neighbor.
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.clearRect(0, 0, displayWidth, displayHeight);

        // Cover-style fit so the character fills the box.
        const canvasAspect = displayHeight / displayWidth;
        let drawW, drawH, dx, dy;
        if (aspect > canvasAspect) {
            drawW = displayWidth;
            drawH = Math.round(displayWidth * aspect);
            dx = 0;
            dy = Math.round((displayHeight - drawH) / 2);
        } else {
            drawH = displayHeight;
            drawW = Math.round(displayHeight / aspect);
            dx = Math.round((displayWidth - drawW) / 2);
            dy = 0;
        }
        this.ctx.drawImage(small, dx, dy, drawW, drawH);
    }

    removeSpaces(character) {
        if (character && character.translations[this.language]?.name) {
            this.removedSpacesCharacterName = character.translations['en'].name.replace(/\s+/g, '');
        } else {
            console.error('Invalid character data provided for removing spaces.');
        }
    }

    listenForCharacterSelect() {
        document.addEventListener('characterSelected', () => {
            if (this.pixelSize < this.maxPixelSize) {
                this.pixelSize += this.pixelSizeRate;
                if (this.pixelSize > this.maxPixelSize) this.pixelSize = this.maxPixelSize;
                localStorage.setItem('pixelSize', this.pixelSize);
                this.drawPixelated();
            }
        });

        document.addEventListener('correctCharacterGuessed', () => {
            // Reveal full image on correct guess.
            this.pixelSize = this.maxPixelSize;
            localStorage.setItem('pixelSize', this.pixelSize);
            this.drawPixelated();
        });
    }
}

const getPixelation = new GetPixelation();
