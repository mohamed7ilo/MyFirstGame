let playerState = 'idle'
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState=e.target.value;
})
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerimage = new Image();
playerimage.src = 'shadow_dog.png';
const spritewidth = 575;
const spriteheight = 523;
let gameFrame = 0;
const staggerFrames = 9;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    }
    , {
        name: 'jump',
        frames: 7,
    }
    , {
        name: 'fall',
        frames: 7,
    }
    , {
        name: 'run',
        frames: 9,
    }
    , {
        name: 'dizzy',
        frames: 11,
    }
    , {
        name: 'sit',
        frames: 5,
    }
    , {
        name: 'roll',
        frames: 7,
    }
    , {
        name: 'bite',
        frames: 7,
    }
    , {
        name: 'ko',
        frames: 12,
    }
    , {
        name: 'githit',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spritewidth
        let positionY = index * spriteheight
        frames.loc.push({ x: positionX, y: positionY })
    }
    spriteAnimations[state.name] = frames;

})
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let framex = spritewidth * position;

    let framey = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerimage, framex, framey, spritewidth, spriteheight, 0, 0, spritewidth, spriteheight);
    gameFrame++
    requestAnimationFrame(animate);
};
animate();
