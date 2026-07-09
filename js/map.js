const TILE_SIZE = 32;

const MAP = [
"GGGGGGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGGGGGG",
"GGGGGGTTTTGGGGGGGGGG",
"GGGGGGTTTTGGGGGGGGGG",
"GGGGGGGGGGGGGGGGGGGG",
"GGGGWWWWWWWWGGGGGGGG",
"GGGGWWWWWWWWGGGGGGGG",
"GGGGGGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGGGGGG",
"GGGGGGGGGGGGGGGGGGGG"
];

function drawMap(ctx){

    for(let y=0;y<MAP.length;y++){

        for(let x=0;x<MAP[y].length;x++){

            const tile=MAP[y][x];

            if(tile==="G"){
                ctx.fillStyle="#4CAF50";
            }

            if(tile==="T"){
                ctx.fillStyle="#8B4513";
            }

            if(tile==="W"){
                ctx.fillStyle="#2196F3";
            }

            ctx.fillRect(
                x*TILE_SIZE,
                y*TILE_SIZE,
                TILE_SIZE,
                TILE_SIZE
            );

        }

    }

}
