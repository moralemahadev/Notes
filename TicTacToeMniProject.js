// Accessing the element

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Declaring variable and 2D Array
let turnO = true; // playerX, playerO

// 2D Array 
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


// resetGame function logic
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}


// Adding Event listener on all button
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO) { // playerO
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        
        // calling checkWinner function 
        chekWinner();
       });
    });

    // Disabled the all remaning boxes after winner is found
    const disableBoxes = () =>{

        for(let box of boxes){
            box.disabled = true;
        }
    }

    // EnableBoxes after clicking new game button all boxes should be enabled
    const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    }


    // Function for to print winner message
    const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
    // Calling the disable boxes function after find  out our winner 
    disableBoxes();
    
}

// Function for to check Winner
 const chekWinner = () => {
     for (let pattern of winPatterns){
        // Find out the position 1,2,3 values
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
         // chek postion value should not empty
        if (pos1val != "" && pos2val != "" && pos3val !="") {
            if(pos1val === pos2val && pos2val === pos3val){
                
                // Calling showWinner function
                showWinner(pos1val);

            }

        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




