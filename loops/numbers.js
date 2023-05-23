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

// for (i = 100 * -1 ; i <= 0; i++) {  																							 <<--------	another way as well----->>        

// 	console.log(i);

// 	if (i === 0) {
// 		zero(i);
// 	}
// }


