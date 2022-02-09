const cells = Array.from(document.querySelectorAll('.grid-item'))
// const playerTurn = document.getElementsByClassName('.turn');
// const gameResult = document.getElementById('status');


const xSign = "<img src='x.png'>";
const oSign = "<img src='o.png'>";
let clickCounter = 0;
let xGameMoves =[];
let oGameMoves = [];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]



//For each cell/index => add click listener 
cells.forEach((cell, index) => {
    cell.addEventListener('click', ()=>{
        handleClick(index);  
    
    })
})

//changes turns and insert x and o signs
//check if the cell is empty or not
function handleClick(index){
    if(cells[index].innerHTML === ''){
        clickCounter++;
        togglePlayer();
        insertSign(index);
    } else{
        return false;
    }

}

//function for inserting x and o signs and tracking moves 
function insertSign(index){
    if(clickCounter%2===0){
        cells[index].innerHTML = oSign;
        oGameMoves.push(index)
        console.log(`o move ${oGameMoves}`)
        
    } else{
        cells[index].innerHTML = xSign;
        xGameMoves.push(index)
        console.log(`x move ${xGameMoves}`)
    }
}

//changes turns
function togglePlayer(){
    if(clickCounter%2===0){
        document.getElementById('player').innerHTML="X"
    }else{
        document.getElementById('player').innerHTML='O';
    }
}

