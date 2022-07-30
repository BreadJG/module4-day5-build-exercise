const cards = [
    {
        name: 'Spidey',
        img: '/images/Spidey.png'
    },
    {
        name: 'boxer',
        img: '/images/boxer.png'
    },
    {
        name: 'gaming',
        img: '/images/gaming.png'
    },
    {
        name: 'Spidey',
        img: '/images/Spidey.png'
    },
    {
        name: 'boxer',
        img: '/images/boxer.png'
    },
    {
        name: 'gaming',
        img: '/images/gaming.png'
    },
    {
        name: 'bao',
        img: '/images/bao.png'
    },
    {
        name: 'cactus',
        img: '/images/cactus.png'
    },
    {
        name: 'dog',
        img: '/images/dog.png'
    },
    {
        name: 'pikachu',
        img: '/images/pikachu.png'
    },
    {
        name: 'Lebron',
        img: '/images/lebron.png'
    },
    {
        name: 'bao',
        img: '/images/bao.png'
    },
    {
        name: 'cactus',
        img: '/images/cactus.png'
    },
    {
        name: 'dog',
        img: '/images/dog.png'
    },
    {
        name: 'pikachu',
        img: '/images/pikachu.png'
    },
    {
        name: 'Lebron',
        img: '/images/lebron.png'
    }
]

const Start = document.getElementById('startButton');

let gameStart = false;

let board = document.getElementById('row');

let chosenCards = [];
let chosenId = [];
function unlock(){
    if (chosenCards[1] === 'bao'){
        let pic = document.getElementById('bao');
        pic.style.display = 'inline-block';
    } else if (chosenCards[1] === 'boxer'){
        let pic = document.getElementById('boxer');
        pic.style.display = 'inline-block';
    } else if (chosenCards[1] === 'cactus'){
        let pic = document.getElementById('cactus');
        pic.style.display = 'inline-block';
    } else if (chosenCards[1] === 'dog'){
        let pic = document.getElementById('dog');
        pic.style.display = 'inline-block';
    } else if (chosenCards[1] === 'gaming'){
        let pic = document.getElementById('gaming');
        pic.style.display = 'inline-block';
    } else if (chosenCards[1] === 'Lebron'){
        let pic = document.getElementById('Lebron');
        pic.style.display = 'inline-block';
    } else if (chosenCards[1] === 'pikachu'){
        let pic = document.getElementById('pikachu');
        pic.style.display = 'inline-block';
    } else if (chosenCards[1] === 'Spidey'){
        let pic = document.getElementById('Spidey');
        pic.style.display = 'inline-block';
    } 
}
function checkMatch(){
    let chosenIdOne = document.getElementById(chosenId[0]);
    let chosenIdTwo = document.getElementById(chosenId[1]);
    console.log(board[1])
    if (chosenCards[0] === chosenCards[1]){
        chosenIdOne.setAttribute('src', '/images/check.png');
        chosenIdTwo.setAttribute('src', '/images/check.png');
        unlock();
    } else {
        chosenIdOne.setAttribute('src', '/images/hidden.png');
        chosenIdTwo.setAttribute('src', '/images/hidden.png');
    }
    chosenCards = [];
    chosenId = [];
}

function createBoard(){
    for (let i = 0; i < cards.length; i++) {
        let newCard = document.createElement('img');
        newCard.setAttribute('src', '/images/hidden.png');
        newCard.classList.add('click');
        newCard.setAttribute('id', i);
        newCard.addEventListener('click', function(e){
           let cardId = this.getAttribute('id');
           if(chosenCards.length < 2){
            chosenCards.push(cards[cardId].name);
            chosenId.push(cardId);
            this.setAttribute('src', cards[cardId].img)
                if (chosenCards.length === 2){
                    setTimeout(checkMatch, 1000);
                };
            }else if(chosenCards.length >= 2){
                alert('2 cards at a time!')
            }
        });
        board.appendChild(newCard);
    }
}

function shuffle(cards){
    for (let i = 0; i < cards.length; i++) {
      let rand = Math.floor(Math.random() * i);
      let newDeck = cards[i];
      cards[i] = cards[rand];
      cards[rand] = newDeck;
    }
  }



Start.addEventListener('click', function(e){
    if (gameStart === false){
        shuffle(cards);
        createBoard();
        Start.innerText = 'Reset';
        gameStart = true;
    } else {
        while(board.firstChild){
            board.removeChild(board.firstChild);
        }
        document.getElementsByClassName('display')
        Start.innerText = 'Start';

        document.getElementById('bao').style.display = 'none';
        
    
        document.getElementById('boxer').style.display = 'none';
        
   
        document.getElementById('cactus').style.display = 'none';
        
   
        document.getElementById('dog').style.display = 'none';
        
    
        document.getElementById('gaming').style.display = 'none';
        
   
        document.getElementById('Lebron').style.display = 'none';
        
    
        document.getElementById('pikachu').style.display = 'none';
        
  
        document.getElementById('Spidey').style.display = 'none';
        

        gameStart = false;
    }
})

