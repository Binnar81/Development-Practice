


//Rock, Paper & Scissor Game
let playGame=confirm("can we start the game" );
if(playGame){
    let playerChoice=prompt("choose any one player name: scissor, paper, rock" );
   if(playerChoice){
    let playerOne=playerChoice.trim().toLowerCase();
    if(playerOne==="rock" || playerOne==="paper" || playerOne==="scissor"){
        let computerChoice=Math.floor(Math.random()*3+1);
        let computer=
         computerChoice===1
        ? "rock"
        : computerChoice===2
        ? "paper"
        : "scissor";
    let result=
    playerOne===computer
    ? "Tie Game"
    : playerOne==="rock" && computer==="paper"
    ? `playerOne:${playerOne} \ncomputer: ${computer} \ncomputer wins!`
    :playerOne==="paper" && computer==="scissor"
    ? `playerOne:${playerOne}\ncomputer:${computer}\ncomputer wins!`
    : playerOne==="scissor" && computer==="rock"
    ? `playerOne:${playerOne}\ncomputer:${computer}\ncomputer wins`
    : `playerOne:${playerOne}\ncomputer:${computer}\nplayerOne wins!`;
    alert(result);
    let playAgain=confirm("play again");
    playAgain?location.reload():alert("ok, thanks for playing");
    }
    else{
        alert("you didn't enter rock,paper, and scissor");
    }
}
else{
    alert("I guess you have chnages your mind. Maybe try next time");
}

    }
   else{
    alert("ok, maybe try next time");
   }