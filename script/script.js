const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
let activePlayer = 1;

const initial = () => {
    activePlayer = 1;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-2').textContent = 0;
    document.getElementById('sub-score-1').textContent = 0;
    document.getElementById('sub-score-2').textContent = 0;
    document.getElementById('dice').style.display = 'none';  
    document.getElementById('player-1').classList.remove('winner');
    document.getElementById('player-2').classList.remove('winner');
    document.getElementById('player-2').classList.remove('active');
    document.getElementById('player-1').classList.add('active');
    document.getElementById('title-1').textContent = 'Player 1';
    document.getElementById('title-2').textContent = 'Player 2';
    document.getElementById('final-score').value = 20;
    roll.disabled = false;
    hold.disabled = false;
}

const rollDice = () =>{
    let value = Math.floor(Math.random()*6)+1;
    let image = './images/dice-' + value + '.png';
    document.getElementById('dice').src = image;
    document.getElementById('dice').style.display = 'block';
    if(value>1){
        let currentElement = document.getElementById('sub-score-'+activePlayer);
        let currentValue = parseInt(currentElement.textContent);
        currentValue += value;
        currentElement.textContent = currentValue;
    }else{
        nextPlayer();
    };
};

const holdValue = () =>{
    let currentElement = document.getElementById('sub-score-'+activePlayer);
    let currentScoreElement = document.getElementById('score-'+activePlayer);
    let currentValue = parseInt(currentElement.textContent);
    let score = parseInt(currentScoreElement.textContent);
    score += currentValue;
    currentScoreElement.textContent = score;
    let finalScore = document.getElementById('final-score').value
    if(score >= finalScore){
        document.getElementById('player-'+activePlayer).classList.add('winner');
        document.getElementById('title-'+activePlayer).textContent = 'Winner!!!';
        document.getElementById('sub-score-'+activePlayer).textContent = 0;
        roll.disabled = true;
        hold.disabled = true;
    }else{
        nextPlayer();
    };
};

const nextPlayer = () =>{
    document.getElementById('player-'+activePlayer).classList.remove('active');
    document.getElementById('sub-score-'+activePlayer).textContent = 0;
    if(activePlayer === 1){
        activePlayer = 2;
    }else{
        activePlayer = 1;
    };
    document.getElementById('player-'+activePlayer).classList.add('active');
};

initial();