  let userScore = 0;
  let computerScore = 0;
  let playerSelection ;
  
  const choices = ['rock', 'paper', 'scissors'];
  const paper=document.querySelector('#paperbutton');
  const rock= document.querySelector('#rockbutton');
  const scissors= document.querySelector('#scissorsbutton');
  let computerSelection = computerPlay()
  let currentPlayerscore = document.querySelector('#userscore');
  let currentComputerscore = document.querySelector('#computerscore');
  let currentRoundResult = document.querySelector('#roundresult');

  
  function FullRoundPlayed (user, computer) {
      if (userScore == 5) {
      alert('User Wins!')
      console.log('user wins')
      }
      else if (computerScore == 5) {
      alert('Computer Wins!'); }
      console.log('computer wins')
  }
  
   // Linking buttons to corresponding Rock, Paper, Scissor Buttons //
  paperbutton.addEventListener('click', (paper) => {
     playRound('paper', computerSelection)
  });
  rockbutton.addEventListener('click', (rock) => {
     playRound('rock', computerSelection)
  });
  scissorsbutton.addEventListener('click', (scissors) => {
    playRound('scissors', computerSelection)
  });
  // Constructing the Computer Randomized Pick //
  function computerPlay() {
      let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; }
    
  // Rock Paper Scissors Results //  
  function playRound(playerSelection, computerSelection) {
      switch (playerSelection + computerSelection) {
          case 'rockscissors':
          case 'scissorspaper':
          case 'paperrock':        
          currentRoundResult.innerHTML = 'You win, ' + playerSelection + ' beats ' + computerSelection
          userScore++; 
          currentPlayerscore.innerHTML = userScore;
          return 'You win, rock beats scissors!'
          break  
          case 'scissorsrock':
          case 'paperscissors':
          case 'rockpaper':    
          currentRoundResult.innerHTML = 'You lose, ' + computerSelection + ' beats ' + playerSelection 
          computerScore++;
          currentComputerscore.innerHTML = computerScore;
          break
          case 'paperpaper':
          case 'rockrock':
          case 'scissorsscissors':
          currentRoundResult.innerHTML = 'Its a tie, both players picked ' + computerSelection
          break;
        }
      }


    

 
      
      