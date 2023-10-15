let turn = 1
let turnCounter = document.getElementById("turnCount")
let resetButton = document.getElementById("reset")
let win = document.getElementById("winner")
let tl = document.getElementById("tl");
let tm = document.getElementById("tm");
let tr = document.getElementById("tr");
let ml = document.getElementById("ml");
let mm = document.getElementById("mm");
let mr = document.getElementById("mr");
let bl = document.getElementById("bl");
let bm = document.getElementById("bm");
let br = document.getElementById("br");
let gameButtons = ["tl", "tm", "tr", "ml", "mm", "mr", "bl", "bm" ,"br"]

/* Button to function game */
tl.addEventListener ('click', () =>{
    if (turn%2 === 0){
        tl.innerHTML = "O"
    } else {
        tl.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML = 'Turn: ' + turn;
});
tm.addEventListener ('click', () =>{
    if (turn%2 === 0){
        tm.innerHTML = "O"
    } else {
        tm.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
tr.addEventListener ('click', () =>{
    if (turn%2 === 0){
        tr.innerHTML = "O"
    } else {
        tr.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
ml.addEventListener ('click', () =>{
    if (turn%2 === 0){
        ml.innerHTML = "O"
    } else {
        ml.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
mm.addEventListener ('click', () =>{
    if (turn%2 === 0){
        mm.innerHTML = "O"
    } else {
        mm.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
mr.addEventListener ('click', () =>{
    if (turn%2 === 0){
        mr.innerHTML = "O"
    } else {
        mr.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
bl.addEventListener ('click', () =>{
    if (turn%2 === 0){
        bl.innerHTML = "O"
    } else {
        bl.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
bm.addEventListener ('click', () =>{
    if (turn%2 === 0){
        bm.innerHTML = "O"
    } else {
        bm.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
br.addEventListener ('click', () =>{
    if (turn%2 === 0){
        br.innerHTML = "O"
    } else {
        br.innerHTML = "X"
    } turn++; 
    turnCounter.innerHTML =  'Turn: ' + turn;
})
/* Event listners to determine a winner for X */
tl.addEventListener('click', () =>{
if (tl.innerHTML === "X" && tm.innerHTML === "X" && tr.innerHTML ==="X"){
    win.innerHTML = "X's Win!";
    win.style.color = "black";
} else if (tl.innerHTML === "X" && ml.innerHTML === "X" && bl.innerHTML ==="X"){
    win.innerHTML = "X's Win!";
    win.style.color = "black";
}else if (tl.innerHTML === "X" && mm.innerHTML === "X" && br.innerHTML ==="X"){
    win.innerHTML = "X's Win!";
    win.style.color = "black";
}
})
tm.addEventListener('click', () =>{
    if (tm.innerHTML === "X" && tl.innerHTML === "X" && tr.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } else if (tm.innerHTML === "X" && mm.innerHTML === "X" && bm.innerHTML === "X"){
        win.innerHTML = "X's Win!"
        win.style.color = "black";
    }
    })
tr.addEventListener('click', () =>{
 if (tr.innerHTML === "X" && mr.innerHTML === "X" && br.innerHTML ==="X"){
    win.innerHTML = "X's Win!";
    win.style.color = "black";
}  else if (tr.innerHTML === "X" && tm.innerHTML === "X" && tl.innerHTML ==="X"){
    win.innerHTML = "X's Win!";
    win.style.color = "black";
} else if (tr.innerHTML === "X" && mm.innerHTML === "X" && bl.innerHTML ==="X"){
    win.innerHTML = "X's Win!";
    win.style.color = "black";
}
})
ml.addEventListener('click', () =>{
    if (ml.innerHTML === "X" && bl.innerHTML === "X" && tl.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
 } else if (ml.innerHTML === "X" && mm.innerHTML === "X" && mr.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } 
})
mm.addEventListener('click', () =>{
    if (mm.innerHTML === "X" && tl.innerHTML === "X" && br.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } else if (mm.innerHTML === "X" && bl.innerHTML === "X" && tr.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } else if (mm.innerHTML === "X" && ml.innerHTML === "X" && mr.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } else if (mm.innerHTML === "X" && tm.innerHTML === "X" && bm.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } 
})
mr.addEventListener('click', () =>{
    if (mr.innerHTML === "X" && br.innerHTML === "X" && tr.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } else if (mr.innerHTML === "X" && mm.innerHTML === "X" && ml.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } 
})
bl.addEventListener('click', () =>{
    if (bl.innerHTML === "X" && mm.innerHTML === "X" && tr.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
 } else if (bl.innerHTML === "X" && ml.innerHTML === "X" && tl.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
 } else if (bl.innerHTML === "X" && bm.innerHTML === "X" && br.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } 
})
bm.addEventListener('click', () =>{
    if (bm.innerHTML === "X" && bl.innerHTML === "X" && br.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
    } else if (bm.innerHTML === "X" && mm.innerHTML === "X" && tm.innerHTML === "X"){
    win.innerHTML = "X's Win!"
    win.style.color = "black";
    }
    })
br.addEventListener('click', () =>{
    if (br.innerHTML === "X" && mm.innerHTML === "X" && tl.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
 } else if (br.innerHTML === "X" && mr.innerHTML === "X" && tr.innerHTML ==="X"){
        win.innerHTML = "X's Win!";
        win.style.color = "black";
}else if (br.innerHTML === "X" && bm.innerHTML === "X" && bl.innerHTML ==="X"){
    win.innerHTML = "X's Win!";
    win.style.color = "black";
}  
})

/* O winner events */
tl.addEventListener('click', () =>{
    if (tl.innerHTML === "O" && tm.innerHTML === "O" && tr.innerHTML ==="O"){
        win.innerHTML = "O's Win!";
        win.style.color = "black";
    } else if (tl.innerHTML === "O" && ml.innerHTML === "O" && bl.innerHTML ==="O"){
        win.innerHTML = "O's Win!";
        win.style.color = "black";
    }else if (tl.innerHTML === "O" && mm.innerHTML === "O" && br.innerHTML ==="O"){
        win.innerHTML = "O's Win!";
        win.style.color = "black";
    }
    })
tm.addEventListener('click', () =>{
        if (tm.innerHTML === "O" && tl.innerHTML === "O" && tr.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } else if (tm.innerHTML === "O" && mm.innerHTML === "O" && bm.innerHTML === "O"){
            win.innerHTML = "O's Win!"
            win.style.color = "black";
        }
        })
tr.addEventListener('click', () =>{
     if (tr.innerHTML === "O" && mr.innerHTML === "O" && br.innerHTML ==="O"){
        win.innerHTML = "O's Win!";
        win.style.color = "black";
    }  else if (tr.innerHTML === "O" && tm.innerHTML === "O" && tl.innerHTML ==="O"){
        win.innerHTML = "O's Win!";
        win.style.color = "black";
    } else if (tr.innerHTML === "O" && mm.innerHTML === "O" && bl.innerHTML ==="O"){
        win.innerHTML = "O's Win!";
        win.style.color = "black";
    }
    })
ml.addEventListener('click', () =>{
        if (ml.innerHTML === "O" && bl.innerHTML === "O" && tl.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
     } else if (ml.innerHTML === "O" && mm.innerHTML === "O" && mr.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } 
    })
mm.addEventListener('click', () =>{
        if (mm.innerHTML === "O" && tl.innerHTML === "O" && br.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } else if (mm.innerHTML === "O" && bl.innerHTML === "O" && tr.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } else if (mm.innerHTML === "O" && ml.innerHTML === "O" && mr.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } else if (mm.innerHTML === "O" && tm.innerHTML === "O" && bm.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } 
    })
mr.addEventListener('click', () =>{
        if (mr.innerHTML === "O" && br.innerHTML === "O" && tr.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } else if (mr.innerHTML === "O" && mm.innerHTML === "O" && ml.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } 
    })
bl.addEventListener('click', () =>{
        if (bl.innerHTML === "O" && mm.innerHTML === "O" && tr.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
     } else if (bl.innerHTML === "O" && ml.innerHTML === "O" && tl.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
     } else if (bl.innerHTML === "O" && bm.innerHTML === "O" && br.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } 
    })
bm.addEventListener('click', () =>{
        if (bm.innerHTML === "O" && bl.innerHTML === "O" && br.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
        } else if (bm.innerHTML === "O" && mm.innerHTML === "O" && tm.innerHTML === "O"){
        win.innerHTML = "O's Win!"
        win.style.color = "black";
        }
        })
br.addEventListener('click', () =>{
    if (br.innerHTML === "O" && mm.innerHTML === "O" && tl.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
     } else if (br.innerHTML === "O" && mr.innerHTML === "O" && tr.innerHTML ==="O"){
            win.innerHTML = "O's Win!";
            win.style.color = "black";
    }else if (br.innerHTML === "O" && bm.innerHTML === "O" && bl.innerHTML ==="O"){
        win.innerHTML = "O's Win!";
        win.style.color = "black";
    }  
    })
/* Reset event */
resetButton.addEventListener('click', () =>{
    gameButtons.forEach(elementId => {
    document.getElementById(elementId).innerHTML = ""
})
    turn = 1;
    turnCounter.innerHTML =  'Turn: ' + turn;
    win.style.color = "transparent";
})