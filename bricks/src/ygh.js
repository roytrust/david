import Game from "./game.js";


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);



game.paddle.draw(ctx);

let lastTime = 0;

//image

function gameLoop(timestanp) {
    let deltaTime = timestanp - lastTime;
    lastTime = timestanp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
   
    game.update(deltaTime);
    game.draw(ctx)
    

    requestAnimationFrame(gameLoop);
}


requestAnimationFrame(gameLoop);
