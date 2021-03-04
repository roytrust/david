document.addEventListener('DOMContentLoaded', () =>{

    //card options
    const cardArray = [
        {
            name: 'biscuit',
            img: 'image/biscuit.png'
        },
        {
            name: 'biscuit',
            img: 'image/biscuit.png'
        },
        {
            name: 'amour',
            img: 'image/amour.png'
        },
        {
            name: 'amour',
            img: 'image/amour.png'
        },
        {
            name: 'chocolat',
            img: 'image/chocolat.png'
        },
        {
            name: 'chocolat',
            img: 'image/chocolat.png'
        },
        {
            name: 'love',
            img: 'image/love.png'
        },
        {
            name: 'love',
            img: 'image/love.png'
        },
        {
            name: 'rose',
            img: 'image/rose.png'
        },
        {
            name: 'rose',
            img: 'image/rose.png'
        },
        {
            name: 'rouge',
            img: 'image/rouge.png'
        },
        {
            name: 'rouge',
            img: 'image/rouge.png'
        }


    ]

    cardArray.sort(() => 0.5 -Math.random())


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'image/coeur.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for maches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('congratulation, you have found a match!')
        cards[optionOneId].setAttribute('src', 'image/white.png')
        cards[optionTwoId].setAttribute('src', 'image/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'image/coeur.png')
        cards[optionTwoId].setAttribute('src', 'image/coeur.png')
        alert('Sorry,try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation! You found them all!'
    }
}



//flip your card
function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})