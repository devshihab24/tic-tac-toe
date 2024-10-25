//variable declaration
let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".message-container");
let para = document.querySelector("#msg");

let turnO = true;
//game er winning pattern 
const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]
//box guloke disable korar jonno ai function 
const disabledBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
//box guloke enable korar jonno ai function
const enabledBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
//New game btn or reset game btn er function
let newGame = () => {
    turnO = true;
    enabledBox();
    messageContainer.classList.add("hide");
}
//kon box aa click korle ki likha asbe r kar turn seitar function aita 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){     //if "O" has the turn
            box.innerText = "O"
            turnO = false;
        }
        else{                   //if "X" has the turn
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
// winner check korar jonno function
const checkWinner = () => {
    for(let pattern of winningPattern){
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]])
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)

        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;

        if(position1Val !== "" && position2Val !== "" && position3Val !== ""){
            if(position1Val === position2Val && position2Val === position3Val){
                console.log("You win the game!", position1Val)
                showWinner(position1Val)
            }
        }
    }
}
/**
 * winner check korar por upore ekti dialogue box show korar jonno j k win hoice seitar jonno function
 */
let showWinner = (winner) => {
    para.innerText = `Congratulations. Winner is ${winner}😍`;
    messageContainer.classList.remove("hide");
    disabledBox();
}
//btn aa event listener add kora
newGameBtn.addEventListener("click", newGame)
resetButton.addEventListener("click", newGame)