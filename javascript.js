    let score = JSON.parse(localStorage.getItem('score'));

    if (score === null) {
        score = {
            wins: 0,
            losses: 0,
            draws: 0
        };
 
    }

        updateScore();
        YourResult();


    function PlayGame (PlayMove) {
        let  ComputerMove = PickComputerMove();
        let result = '';

        if (PlayMove === 'rock') {
            if(ComputerMove === 'rock') {
                result = 'draw';
            } else if (ComputerMove === 'paper') {
                result = 'you lose';
            } else if (ComputerMove === 'scissors') {
                result = 'you win';
            }
        }

        if (PlayMove === 'paper') {
            if(ComputerMove === 'rock') {
                result = 'you win';
            } else if (ComputerMove === 'paper') {
                result = 'draw';
            } else if (ComputerMove === 'scissors') {
                result = 'you lose';
            }
        }

        if (PlayMove === 'scissors') {
            if(ComputerMove === 'rock') {
                result = 'you lose';
            } else if (ComputerMove === 'paper') {
                result = 'you win';
            } else if (ComputerMove === 'scissors') {
                result = 'draw';
            }


        }



        if (result === 'you win'){
            score.wins += 1
        } else if (result === 'you lose'){
            score.losses += 1
        } else if (result === 'draw'){
            score.draws += 1
        }

        localStorage.setItem('score' , JSON.stringify(score));
        updateScore();

    
        document.querySelector('.the-result').
         innerHTML = result;

        document.querySelector('.the-choose').
         innerHTML = `you
         <img src="images/${PlayMove}-emoji.png" 
         class="move-icon">
         <img src="images/${ComputerMove}-emoji.png"
         class="move-icon"> computer`;
 
    }


        function updateScore(){

        document.querySelector('.js-score')
          .innerHTML = ` wins:${score.wins} , losses:${score.losses} , draws:${score.draws}`;
    }

    function PickComputerMove() {
        let RandomNumber = Math.random();
        let ComputerMove =  '';
        
        if (RandomNumber > 0 && RandomNumber < 1 / 3) {
            ComputerMove = 'rock';
        } else if (RandomNumber > 1 / 3 && RandomNumber < 2 / 3) {
            ComputerMove = 'paper';
        } else if (RandomNumber > 2 / 3 && RandomNumber < 1 ) {
            ComputerMove = 'scissors';
        }

        return ComputerMove;

    }


    function SubscribeBtn() {
        const subElement = document.querySelector('.js-subscribe');
        if (subElement.innerHTML === 'Subscribe') {
            subElement.innerHTML = 'Subscribed';
            subElement.classList.add('is-subscribed')
        } else {
            subElement.innerHTML = 'Subscribe';
            subElement.classList.remove('is-subscribed');
        }
    }



    function CalculateTotal(){
        const inputElement = document.querySelector('.js-cost');
        let cost = Number(inputElement.value);

        if (cost < 40 ) {
            cost = cost + 10;
        } 

        document.querySelector('.js-salary')
          .innerHTML = `$${cost}`;
    }

    function keyEnter() {

        if (event.key === 'Enter') {
            CalculateTotal();
        }
    }




