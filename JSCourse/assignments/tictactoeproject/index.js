const Game = () => {
    let board = [];

    let player1 = {
        id : 1,
        marker : 'X'
    };

    let player2 = {
        id : 2,
        marker : 'O'
    };

    let curPlayer = player1.id;

    const gameFunction = (e) => {
        const playerDis = document.getElementById('player-turn');
        const target = e.explicitOriginalTarget;
        if (curPlayer == 1){
            // changes html
            target.innerHTML = player1.marker;
            // adds to array
            setPlayer(player1);
            playerDis.innerHTML = "<h1>Player 2 Turn!</h1>";
            curPlayer = player2.id;
        }
        else {
            // changes html
            target.innerHTML = player2.marker;
            // adds to array
            setPlayer(player2);
            playerDis.innerHTML = "<h1>Player 1 Turn!</h1>";
            curPlayer = player1.id;
        }
    };

    const setPlayer = (player) => {
        // if game is not won
        let i = 0;
        document.querySelectorAll('[input]').forEach(e => {
            board[i] = e.innerHTML;
            i++;
        });
        checkWin(player);
    };

    const checkWin = (player) => {
        let j = 0;
        let match = false;
        for (let i = 0; i < board.length; i+=3){   
            if (match != false){
                console.log(`Player ${player.id} Won!`);
                endGame();
                return;
            }
            let cur = board[i];
            for (let j = i; j < (i + 3); j++){
                if (board[j] != cur){
                    console.log("J: " + board[j] + " cur: " + cur);
                    match = false;
                    continue;
                }
                else {
                    match = true;
                }
            }
        }
    };

    const endGame = () => {
        // removes event listeners if game won
        document.querySelectorAll('[input]').forEach(e => {
            e.removeEventListener('click', gameFunction, { once:true });
        });  
    };

    // sets event listeners
    document.querySelectorAll('[input]').forEach(e => {
        e.addEventListener('click', gameFunction, { once:true });
    });  
};

// input controls
Game();