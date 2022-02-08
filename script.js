const cells = Array.from(document.querySelectorAll('.grid-item'))
// const playerTurn = document.getElementsByClassName('.turn');
// const gameResult = document.getElementById('status');
let clickCounter = 0;

const winning = [
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
function handleClick(index){
    clickCounter++;
    togglePlayer();
    insertSign(index);
}

//function for inserting x and o signs
function insertSign(index){
    if(clickCounter%2===0){
        cells[index].innerHTML = "<img src='o.png'>";
    } else{
        cells[index].innerHTML = "<img src='x.png'>";
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
