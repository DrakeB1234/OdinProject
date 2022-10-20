function groceryItem(category, item, amount){
    this.category = category,
    this.item = item,
    this.amount = amount
}

let groceryList = [];

groceryList.push(new groceryItem('Veggie', 'Green Onions', 2));
groceryList.push(new groceryItem('Fruit', 'Potato', 2));
groceryList.push(new groceryItem('Frozen', 'Pizza', 2));

console.log(groceryList);

const found = groceryList.findIndex(function (e) { 
    return e == "Potato"
});

groceryList.splice(found, 1);

console.log(groceryList);