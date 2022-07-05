const elementChoice = document.querySelectorAll("button")
const playerResult = document.getElementById("player-choice")
const computerResult = document.getElementById("computer-choice")
const result = document.getElementById("result")
const playerScore = document.getElementById("player-score")
const iaScore = document.getElementById("ia-score")
// leaderbord
const round = document.getElementById("round")
const playerRound = document.getElementById("player-round")
const iaRound = document.getElementById("ia-round")

let playerChoice
let iaChoice
let resultat 
let playerPoints = 0
let iaPoints = 0
// leaderbord
let roundNumber = 0
let playerRoundWin = 0
let iaRoundWin = 0

elementChoice.forEach(elementChoice => elementChoice.addEventListener('click',(e) => {
    // récupération de l'ID du boutton cliqué
    playerChoice = e.target.id
 
    // On ajoute l'image pour le joueur
    playerResult.innerHTML = `<img src="img/${playerChoice}.png">`
    computerRandomChoice()
    verification()
}))




const computerRandomChoice = () => {
    const min = 1
    const max = 3
    const randomNumber = Math.floor(Math.random() * max) + min

    if(randomNumber === 1){
        iaChoice = "pierre"
    }
    if(randomNumber  === 2){
        iaChoice = "feuille"
    }
    if(randomNumber === 3){
        iaChoice = "ciseaux"
    }

    computerResult.innerHTML = `<img src="img/${iaChoice}.png">`
    return iaChoice
}


const verification = () => {   
    if(playerChoice === iaChoice){
        resultat = "Egalité !"
    }else if((playerChoice === "pierre" && iaChoice === "feuille") || 
            (playerChoice === "feuille" && iaChoice === "ciseaux") || 
            (playerChoice === "ciseaux" && iaChoice === "pierre")){
                resultat = "l'ordinateur a gagné"
                iaPoints += 1
                roundNumber += 1
    }else{
        resultat = "Vous avez gagné !"
        playerPoints += 1
        roundNumber += 1
    }
    
    iaScore.innerHTML = iaPoints
    playerScore.innerHTML = playerPoints
    round.innerHTML = roundNumber
    iaRound.innerHTML = iaChoice
    playerRound.innerHTML = playerChoice
    
    

    if(playerPoints === 3){
        iaScore.innerHTML = iaPoints
        playerScore.innerHTML = playerPoints
        round.innerHTML = roundNumber
        playerPoints = 0
        iaPoints = 0
        roundNumber = 0
    }

    if(iaPoints === 3){
        iaScore.innerHTML = iaPoints
        playerScore.innerHTML = playerPoints
        round.innerHTML = roundNumber
        playerPoints = 0
        iaPoints = 0
        roundNumber = 0
    }

    result.innerHTML = resultat
}
