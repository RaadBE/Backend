let yes = true;
let no = false;

function isOrdered(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            return no;
        }
    }
    return yes;
}
let arr = [1, 55, 3, 4, 5];
console.log(isOrdered(arr)); // should print true


