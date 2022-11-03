const Game = () => {
    let board = [
        [0,1,2],
        [0,1,2],
        [0,1,2]
    ];

    let player1 = {
        id : 1,
        marker : 'X'
    };

    let player2 = {
        id : 2,
        marker : 'O'
    };

    const playerDis = document.getElementById('player-turn');
    let curPlayer = player1.id;

    const gameFunction = (e) => {
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
        let l = 0;
        let temp = [];
        document.querySelectorAll('[input]').forEach(e => {
            temp.push(e.innerHTML);
        });

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                board[i][j] = temp[l];
                l++;
            }
        }
        checkWin(player);
    };

    const checkWin = (player) => {
        const winDis = document.getElementById("win-dis");
        if (checkRow() == true || checkCol() == true || checkCross(player) == true){
            winDis.innerHTML = `<h1>Player ${player.id} wins!</h1>`;
            endGame();
            return;
        }
        if (checkFillBoard() == true){
            winDis.innerHTML = "<h1>Its a tie!</h1>";
            endGame();
            return;
        }
    }

    const checkRow = () => {
        for (let i = 0; i < 3; i++){
            let check = board[i][0];
            for (let j = 0; j < 3; j++){
                if (check != board[i][j]){
                    break;
                }
                else if (j == 2 && check == board[i][j] && board[i][j] != ""){
                    return true;
                }
            }
        }
        return false;
    };

    const checkCol = () => {
        for (let i = 0; i < 3; i++){
            let check = board[0][i];
            for (let j = 0; j < 3; j++){
                if (check != board[j][i]){
                    break;
                }
                else if (j == 2 && check == board[j][i] && board[j][i] != ""){
                    return true;
                }
            }
        }
        return false;
    };

    const checkCross = (player) => {
        // ensures that no empty spaces in board
        if(board[0][0] == player.marker && board[1][1] == player.marker && board[2][2] == player.marker){
            return true;
        }
        if(board[0][2] == player.marker && board[1][1] == player.marker && board[2][0] == player.marker){
            return true;
        }
        return false;
    }

    const checkFillBoard = () => {
        let check = 0;
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] != ""){
                    check++;
                }
            }
        }
        if (check >= 9){
            return true;
        }
        return false;
    }

    const endGame = () => {
        // removes event listeners if game won
        document.querySelectorAll('[input]').forEach(e => {
            e.removeEventListener('click', gameFunction, { once:true });
        });  

        document.getElementById("reset-btn").style.display = "block";
    };

    // sets event listeners
    document.querySelectorAll('[input]').forEach(e => {
        e.addEventListener('click', gameFunction, { once:true });
    });
};

// input controls
Game();

document.getElementById("reset-btn").addEventListener('click', (e) => {
    document.querySelectorAll('[input]').forEach(e => {
        e.innerHTML = "";
    });
    document.getElementById("win-dis").innerHTML = "";
    e.explicitOriginalTarget.style.display = "none";
    Game();
});