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
class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        
    }
    startGame() {
        this.cardToCheck = null
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        
    }
    canFlipCard(card) {
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
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

//new MixOrMatch(100, cardsArray)
