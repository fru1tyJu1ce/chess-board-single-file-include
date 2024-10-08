/* board.js must be included above in the html file */

async function demo() {

    clear();
    GAMEMODE = false; // piece movement deactivated
    init(); // initialise the board

    spawnPiece('K', 'd6'); // spwans a piece on given suqare (long notation)

    await new Promise(r => setTimeout(r, 1000)); // only for visualisation

    clear(); // clear the board
    await new Promise(r => setTimeout(r, 1000)); // only for visualisation    

    /* example pos. string */
    const posStr = ` 
    r . b q k b n r 
    p p p p . p p p 
    . . n . . . . . 
    . B . . p . . . 
    . . . . P . . . 
    . . . . . N . . 
    P P P P . P P P 
    R N B Q K . . R`

    buildFromPosStr(posStr); // builds pos. from string

    await new Promise(r => setTimeout(r, 1500)); // only for visualisation


    GAMEMODE = true; // piece movement activated
    init(); // initialise the board

    clear(); // clear the board
    build(); // build standart start pos

    await new Promise(r => setTimeout(r, 1000)); // only for visualisation

    rotateBoard(); // rotates the board

    await new Promise(r => setTimeout(r, 1500)); // only for visualisation

    move('e2', 'e4'); // move e2 e4

    console.log(getPosStr()); // prints the actual pos string from getPosStr()


}

function setFields(msg){
    console.log(JSON.stringify(msg));

    let posstrfield = document.getElementById('posstring');
    posstrfield.value = msg.posStr;
    
}

//Listen for the chessBoardInputOccured cutom event 
window.addEventListener("chessBoardInputOccured", function (evt) {
    setFields(evt.detail);
}, false); 

init(); // initialise the board
build();
let posstrfield = document.getElementById('posstring');
 posstrfield.value = getActPosStr();

//buildFromFEN('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1');
//console.log(getFEN());

//demo();
