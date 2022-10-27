// defining game function
const Game = () => {
    // board available to both players
    let board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

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
        }
        else {
            console.log('This spot is already chosen!');
        }

        update();
        return;
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

    return { move };
};

const newGame = Game();
