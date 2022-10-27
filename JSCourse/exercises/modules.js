const changer = () => {
    let colors = ['red', 'green', 'purple'];

    const addColor = (x) => {
        colors.push(x);
  
        console.log(`Added color ${colors[3]}`);
        console.log(colors);
    }

    const changeColor = () => {
        console.log("changing color");
        // get random number
        const rand = Math.floor(Math.random() * colors.length);
        console.log(colors);
        document.getElementById('data-get').style.backgroundColor = colors[rand];
    }
    // returning functions
    return { addColor, changeColor };
}

// event for change color button
document.getElementById('change-button').addEventListener('click', () => {
    const colorHandler = changer();

    colorHandler.changeColor();
});

// event for add color button
document.getElementById('add-button').addEventListener('click', () => {
    const colorHandler = changer();

    const color = document.getElementById('add-color').value;

    colorHandler.addColor(color);
});