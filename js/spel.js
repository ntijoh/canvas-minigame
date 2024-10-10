// Hämta canvas och dess 2D-kontext
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


// Ladda spelarens bild
const playerImage = new Image();
playerImage.src = 'img/glass2.png'; // Bildens filnamn

// Spelarens startposition och storlek
let player = {
    x: 50,
    y: 50,
    width: 30,
    height: 30,
    //color: 'blue',
    speed: 5
};

// Rörelsevariabler
let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Lyssna på tangenttryck och tangentupptagning
window.addEventListener('keydown', (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key in keys) {
        keys[e.key] = false;
    }
});

// Uppdatera spelarens position
function updatePlayerPosition() {
    if (keys.ArrowUp && player.y > 0) {
        player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y + player.height < canvas.height) {
        player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x + player.width < canvas.width) {
        player.x += player.speed;
    }
}

// Rensa canvas och rita spelaren.
function draw() {
    // Rensa canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Rita spelaren
    //ctx.fillStyle = player.color;
    //ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

// Spelets huvudloop
function gameLoop() {
    updatePlayerPosition();
    draw();
    requestAnimationFrame(gameLoop);
}

// Starta spelet
gameLoop();
