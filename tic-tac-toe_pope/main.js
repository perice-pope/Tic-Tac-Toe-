/*----- constants -----*/ 
const player1 = 'O'; 
const player2 = 'X'; 

// I know this wasn't the coolest way, but its the only way I could understand. 
const winCombinations = [
    [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

/*----- app's state (variables) -----*/ 
let toeBoard; 

/*----- cached element references -----*/ 


/*----- functions -----*/
// to start up the game.
const cells = document.querySelectorAll('.tacs');
init(); //start game 

function init() {
    document.querySelector(".endgame").style.display = "none";
    toeBoard = Array.from(Array(9).keys());
    // console.log(toeBoard)
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', handleClick, false);
	}
}

function handleClick(spaces) {
	turn(spaces.target.id, player1)
}

function turn(spacesId, player) {
	toeBoard[spacesId] = player;
    document.getElementById(spacesId).innerText = player;
    
	let gameWon = checkWin(toeBoard, player) // check if player has won on clicks. 
	if (gameWon) gameOver(gameWon)
 }

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => 
		(e === player) ? a.concat(i) : a, []); // ternary operator. 
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {  //check if player has won on all spots. 
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

/*----- event listeners -----*/ 
// document.querySelector('.tacs') // all divs inside my <section>
//   .addEventListener('click', handleClick);