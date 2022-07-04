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
 
    // On ajoute l'image
    playerResult.innerHTML = `<img src="img/${playerChoice}.png">`
    computerRandomChoice()
    verification()
}))



const computerRandomChoice = () => {
    let iaChoice
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
}

const verification = () => {    
    if(playerChoice === iaChoice){
        resultat = "Egalité !"
    }

    // Défaite
    if(playerChoice === "pierre" && iaChoice === "feuille"){
        resultat = "L'IA a gagné"
    }
    if(playerChoice === "feuille" && iaChoice === "ciseaux"){
        resultat = "L'IA a gagné"
    }
    if(playerChoice === "ciseaux" && iaChoice === "pierre"){
        resultat = "L'IA a gagné"
    }else{
        resultat = "Vous avez gagné !"
    }

    // Victoire
    // if(playerChoice === "pierre" && iaChoice === "ciseaux"){
    //     resultat = "Vous avez gagné !"
    // }
    // if(playerChoice === "ciseaux" && iaChoice === "feuille"){
    //     resultat = "Vous avez gagné !"
    // }
    // if(playerChoice === "feuille" && iaChoice === "pierre"){
    //     resultat = "Vous avez gagné !"
    // }

    result.innerHTML = resultat
}
