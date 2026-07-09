function saveGame(player) {

    const saveData = {

        player: player,

        inventory: inventory

    };

    localStorage.setItem(
        "ihaeseul_rpg_save",
        JSON.stringify(saveData)
    );

    alert("게임이 저장되었습니다.");

}

function loadGame() {

    const data = localStorage.getItem("ihaeseul_rpg_save");

    if (!data) {

        alert("저장된 데이터가 없습니다.");

        return null;

    }

    return JSON.parse(data);

}
