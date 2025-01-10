const object1 = {
  name: 'nandan',
  age: 20,
  email: 'nandanhpsetty@gmail.com',
  city: 'bengaluru',
}

const object2 = object1;

console.log(object1);

object2.age = 21;

console.log(object1);

console.log(object1 === object2);



function newGame(){
  score.win = 0; 
  score.losses = 0; 
  score.ties = 0;
  alert(`reset game successfull!!\nresult \nwin:${score.win}\nlosses:${score.losses}\nTies:${score.ties}`)
}
const score={
  win : 0,
  losses : 0,
  ties : 0
}
function pickComputerMove(){  // function to pick a random move for the computer 
  let computerMove = '';
  const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3 ){
      computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    } else if(randomNumber >=2/3 && randomNumber < 1){
      computerMove = 'scissors';
    }
    return computerMove;
}

function playGame(playerMove){        // function with parameter in onclick attribute to compare computerMove and give results
  const computerMove = pickComputerMove();
  let result = '';
  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      result = 'Tie';
    } else if(computerMove === 'paper'){
      result = 'You Lose';
    } else if(computerMove === 'scissors'){
      result = 'You Win';
    }

  }else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'You Win';
    }else if(computerMove === 'paper'){
      result = 'Tie';
    }else if(computerMove === 'scissors'){
      result = 'You Lose';
    }

  }else if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'You Lose';
    } else if(computerMove === 'paper'){
      result = 'You Win';
    } else if(computerMove === 'scissors'){
      result = 'Tie';
    }
  }

  if(result === 'You Win'){
    score.win++;
  } else if(result === 'You Lose'){
    score.losses++;
  } else if(result === 'Tie'){
    score.ties++;
  }
  alert(`You picked :${playerMove} \nComputer picked: ${computerMove} \nResult:${result}\n\nScore: \nWins: ${score.win}\nLosses: ${score.losses}\nTies: ${score.ties}`);
}
