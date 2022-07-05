const playerResult = document.getElementById("player-choice")
const computerResult = document.getElementById("computer-choice")
const elementChoice = document.querySelectorAll("button")
const result = document.getElementById("result")

let playerChoice
let iaChoice
let resultat 

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
    console.log(playerChoice, iaChoice)
    if(playerChoice === iaChoice){
        resultat = "Egalité !"
    }else if((playerChoice === "pierre" && iaChoice === "feuille") || 
            (playerChoice === "feuille" && iaChoice === "ciseaux") || 
            (playerChoice === "ciseaux" && iaChoice === "pierre")){
                resultat = "l'IA a gagné"
    }else{
        resultat = "Vous avez gagné !"
    }

    result.innerHTML = resultat
}
