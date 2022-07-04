const playerImage = document.getElementById("player-choice")
const computerImage = document.getElementById("computer-choice")
const elementChoice = document.querySelectorAll("button")

let playerChoice

elementChoice.forEach(elementChoice => elementChoice.addEventListener('click',(e) => {
    playerChoice = e.target.id

    playerImage.innerHTML = `<img src="img/${playerChoice}.png">`
}))