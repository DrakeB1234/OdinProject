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
        const target = e.explicitOriginalTarget;
        console.log(e);
        if (curPlayer == 1){
            // changes html
            target.innerHTML = player1.marker;
            // adds to array
            setPlayer();
            curPlayer = player2.id;
        }
        else {
            // changes html
            target.innerHTML = player2.marker;
            // adds to array
            setPlayer();
            curPlayer = player1.id;
        }
    };

    const setPlayer = () => {
        // if game is not won
        const check = checkWin();
        if (!(check)) {
            let i = 0;
            document.querySelectorAll('[input]').forEach(e => {
                board[i] = e.innerHTML;
                i++;
            });
            console.log(board);
        }
    };

    const checkWin = () => {
        let cur = "";
        // check for row
        for (let i = 0; i < 3; i++){
            cur = board[i];
            if (board[i + 1] != cur) {
                alert("no match");
            }
        }
    };

    // sets event listeners
    document.querySelectorAll('[input]').forEach(e => {
        e.addEventListener('click', gameFunction, { once:true });
    });  
};

// input controls
Game();