const cells = Array.from(document.querySelectorAll('.grid-item'))
const gameResult = document.getElementById('status');


const xSign = "<img src='x.png'>";
const oSign = "<img src='o.png'>";
let clickCounter = 0;
let xGameMoves =[];
let oGameMoves = [];

const win1 = [0, 1, 2]
const win2 = [3, 4, 5]
const win3 = [6, 7, 8]
const win4 = [0, 4, 8]
const win5 = [2, 4, 6]
const win6 = [0, 3, 6]
const win7 = [1, 4, 7]
const win8 = [2, 5, 8]


//For each cell/index => add click listener 

        cells.forEach((cell, index) => {
            cell.addEventListener('click', ()=>{
                if(gameResult.innerHTML === ""){
                    handleClick(index);  
                    checkWin();
                }         
            })
        })

//check if the cell is empty or not
//changes turns and insert x and o signs
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
        // console.log(`o move ${oGameMoves}`)
        
    } else{
        cells[index].innerHTML = xSign;
        xGameMoves.push(index)
        // console.log(`x move ${xGameMoves}`)
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


/////////
/////////
/////////
/////////


function containsAll(condition, moves) {
    return condition.every(i => moves.includes(i))
}

function tie(){
    if(clickCounter === 9){
        gameResult.innerHTML = "TIE"
    }
}

function checkWin(){
    if(containsAll(win1, xGameMoves) || containsAll(win2, xGameMoves) || containsAll(win3, xGameMoves) || 
    containsAll(win4, xGameMoves) || containsAll(win5, xGameMoves) || containsAll(win6, xGameMoves) || 
    containsAll(win7, xGameMoves) || containsAll(win8, xGameMoves)){
        gameResult.innerHTML = "X player won"

    } else if(containsAll(win1, oGameMoves) || containsAll(win2, oGameMoves) || containsAll(win3, oGameMoves) || 
    containsAll(win4, oGameMoves) || containsAll(win5, oGameMoves) || containsAll(win6, oGameMoves) || 
    containsAll(win7, oGameMoves) || containsAll(win8, oGameMoves)){
        gameResult.innerHTML = "O player won"
    } else{
        tie();
    }
}

