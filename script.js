class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/Audio/creepy.mp3');
        this.flipSound = new Audio('assets/Audio/flip.wav');
        this.matchSound = new Audio('assets/Audio/match.wav');
        this.victorySound  = new Audio('assets/Audio/victory.wav');
        this.gameOverSound  = new Audio('assets/Audio/gameOver.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
       this.bgMusic.play(); 
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victory.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            //game.startGame();
            // let audioController = new AudioController();
            // audioController.startMusic();

        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            //game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready()
}

