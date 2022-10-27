const Changer = () => {
    let colors = [];

    const addColor = (x) => {
        colors.push(x);
  
        console.log(`Added color ${x}`);
        console.log(colors);
    };

    const changeColor = () => {
        console.log("changing color");
        // get random number
        const rand = Math.floor(Math.random() * colors.length);
        console.log(colors);
        document.getElementById('data-get').style.backgroundColor = colors[rand];
    };
    // returning functions
    return { addColor, changeColor };
};

const Name = () => {
    let names = [];

    const addName = (a) => {
        names.push(a);
  
        console.log(`Added name ${a}`);
        console.log(names);
        postNames();
    };

    const removeName = (a) => {
        names.splice(a, 1);
  
        console.log(`Removed name ${a}`);
        console.log(names);
        postNames();
    };

    const postNames = () => {
        let html = "";
        let index = 0;
        names.forEach((e) => {
            html += `<h1>${e}<button id='remove-name-btn' value='${index}'>-</button></h1>`;
            index++;
        });
        document.getElementById('data-get').innerHTML = html;
    }

    return { addName, removeName };
};

// setting functions to global variables
const colorHandler = Changer();
const nameHandler = Name();

// event for add name button
document.getElementById('add-name-btn').addEventListener('click', () => {
    nameHandler.addName(document.getElementById('add-name').value);
});

// event on window to listen to each click
document.addEventListener('click', (e) => {
    // only fires if the current element clicked is certain id
    if(e.target && e.target.id== 'remove-name-btn'){
        // grabs the original target, then the value from it
        nameHandler.removeName(e.explicitOriginalTarget.value);
    };
});

// event for change color button
document.getElementById('change-button').addEventListener('click', () => {
    colorHandler.changeColor();
});

// event for add color button
document.getElementById('add-button').addEventListener('click', () => {
    colorHandler.addColor(document.getElementById('add-color').value);
});