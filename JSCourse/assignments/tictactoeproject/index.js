// defining game function
const Game = () => {
    // board available to both players
    let board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    const start = () => {
        let player = 2;
        const inputs = document.querySelectorAll('.input-btn-container #input');
        const player1element = document.getElementById('player1-input');
        const player2element = document.getElementById('player2-input');
        player1element.classList.add('active-player');

        inputs.forEach(e => {
            e.addEventListener('click', (e) => {
                const value = e.explicitOriginalTarget.value;
                if (player == 1) {
                    // ensures that the spot isn't chosen already
                    if (!(move(value[0], value[1], value[2]))) {
                        player = 1;
                    }
                    else {
                        player1element.classList.add('active-player');
                        player2element.classList.remove('active-player');
                        e.explicitOriginalTarget.disabled;
                        player = 2;   
                    }
                }
                else {
                    // ensures that the spot isn't chosen already
                    if (!(move(value[0], value[1], value[2]))) {
                        player = 2;
                    }
                    else {
                        player1element.classList.remove('active-player');
                        player2element.classList.add('active-player');
                        e.explicitOriginalTarget.disabled = true;
                        player = 1;   
                    }
                }
            });
        });
    };

    const move = (player, x, y) => {
        // sets character to player
        if (player == 1){
            player = 'O';
        }
        else {
            player = 'X';
        }

        // plants character on chosen spot if not chosen
        if (board[x][y] == 0) {
            board[x][y] = player;
            console.log(`player '${player}' moves to ${x}, ${y}!`);
            update();
            return true;
        }
        else {
            console.log('This spot is already chosen!');
            return false;
        }
    }

    const update = () => {
        // updates board on user side
        let html = "";

        board.forEach((e) => {
            e.forEach((e) => {
                // if array value is 0 (unset) then print empty tag
                if (e == 0) {
                    html += `<h1></h1>`;
                    return;
                }
                // if array is set, then print character
                html += `<h1>${e}</h1>`;
            });
        });

        document.getElementById('data-get').innerHTML = html;
    };

    return { start };
};

document.getElementById('start-game').addEventListener('click', () => {
    document.getElementById('intro').classList.add('hide');
    document.getElementById('main').classList.remove('hide');
    const newGame = Game();
    newGame.start();
});