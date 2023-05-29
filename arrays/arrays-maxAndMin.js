// a way of doing it
const myArray = [20,300,23, 27];

let maxElement = myArray[0];
for (let i = 1; i < myArray.length; ++i) {
    if (myArray[i] > maxElement) {
        maxElement = myArray[i];															
    }
}
console.log("max is :",maxElement);

// ---------------------array-max-----------------
// easier way
// const myArray2 = [4,13,11,50,100,250,1000];

// var max = Math.max(...myArray2);
// console.log("max is : ",max);

// -------------------------array-min------------------------------------

// var min = Math.min(...myArray2);
// console.log("min is : ",min);