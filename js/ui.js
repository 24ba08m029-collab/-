function drawUI(ctx, player) {

    // 배경
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillRect(10, 10, 260, 170);

    ctx.fillStyle = "white";
    ctx.font = "18px Arial";

    ctx.fillText("이해슬 RPG", 20, 35);
    ctx.fillText("Lv : " + player.level, 20, 60);
    ctx.fillText("HP : " + player.hp + " / " + player.maxHp, 20, 85);
    ctx.fillText("MP : " + player.mp + " / " + player.maxMp, 20, 110);
    ctx.fillText("EXP : " + player.exp + " / " + player.nextExp, 20, 135);
    ctx.fillText("Gold : " + player.gold, 20, 160);

}
