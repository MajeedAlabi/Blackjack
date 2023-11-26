let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""


let player = {
    name: "Majeed",
    chips: 200
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomNumber(){
    let number = Math.floor(Math.random()*13)+1
    if(number>10){
        return 10
    }else if(number===1){
        return 11
    }else{
        return number
    }
}


function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum<21){
        message = "Do you want a new card?"
    }else if(sum===21){
        message = "You've got blackjack"
        hasBlackJack = true
    }else{
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive===true && hasBlackJack === false){
        let card = getRandomNumber()
        cards.push(card)
        sum += card
        renderGame()
    }
}
