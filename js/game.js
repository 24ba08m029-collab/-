const canvas = document.createElement("canvas");
canvas.id = "game";
canvas.width = 960;
canvas.height = 540;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const player = {
    x: 100,
    y: 100,
    width: 32,
    height: 32,
    speed: 4,
    hp: 100,
    mp: 50,
    level: 1,
    exp: 0,
    nextExp: 10,
    gold: 0
};

const keys = {};

window.addEventListener("keydown", e => {
    keys[e.key] = true;
});

window.addEventListener("keyup", e => {
    keys[e.key] = false;
});

function update() {

    if(keys["w"] || keys["ArrowUp"]) player.y -= player.speed;
    if(keys["s"] || keys["ArrowDown"]) player.y += player.speed;
    if(keys["a"] || keys["ArrowLeft"]) player.x -= player.speed;
    if(keys["d"] || keys["ArrowRight"]) player.x += player.speed;

}

function draw(){

    ctx.fillStyle = "#66bb66";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="blue";
    ctx.fillRect(player.x,player.y,player.width,player.height);

    ctx.fillStyle="white";
    ctx.font="20px Arial";

    ctx.fillText("Lv : "+player.level,20,30);
    ctx.fillText("HP : "+player.hp,20,60);
    ctx.fillText("MP : "+player.mp,20,90);
    ctx.fillText("EXP : "+player.exp+"/"+player.nextExp,20,120);
    ctx.fillText("Gold : "+player.gold,20,150);

}

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();
