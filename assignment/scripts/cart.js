console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket =[];

function addItem(item1, item2, item3, item4, item5) {
    basket.push(item1, item2, item3, item4, item5)
    return true;
}
// Testing function addItem
console.log(`basket is ${basket}`);
console.log( `item was added (true) =`, addItem('apple','grapes', 'pears', 'nuts', 'berrys'));
console.log(`basket is now = ${basket}`);

// Function listItems
function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(`List Items =`, basket[i]);
    }
}
// Test function listItems
listItems();