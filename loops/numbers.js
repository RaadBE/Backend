function up(n){

	n = parseInt(prompt("enter"));

	for (var i = 0; i <= n; i++) {

		console.log(i);
	}

}


function des(n){
// descending order
	for (var i = n; i >= 0; i--) {
	
		console.log(i);
	}	

}



 //-n to n 
let n = parseInt(prompt("enter"));             

function zero (n) {
																																	 // <<----------------------- SHorter way-------------->>>
	for ( i = -n; i <= n; i++) {

		console.log(i);
	 }

}

zero (n);
let incrementer = 1;
if (n < 0) {
	incrementer = -1;
}
for (i = n; i !== -n; i += incrementer) {
	console.log(i);
}
// for (i = n * -1 ; i <= 0; i++) {  																							 <<--------	another way as well----->>        

// 	console.log(i);

// 	if (i === 0) {
// 		zero(i);
// 	}
// }


// print only odd and even numbers for even add !=
function aa (n) {
for (var i =0; i <= n; i++) {

	if (i % 2 == 0) {    
	console.log(i)
	}
}
}

aa(10);

