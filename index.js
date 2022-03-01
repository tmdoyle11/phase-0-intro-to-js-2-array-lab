// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    let newArray = [...cats];
    newArray.push(Broom);
    return newArray;
}

function prependCat(Arnold) {
    let newArray1 = [...cats];
    newArray1.unshift(Arnold);
    return newArray1; 
}

function removeLastCat() {
    let newArray2 = [...cats];
    newArray2.pop();
    return newArray2;
}

function removeFirstCat() {
    let newArray3 = [...cats];
    newArray3.shift();
    return newArray3;
}