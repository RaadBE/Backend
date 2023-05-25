	var n = [];

const randomNum = (min, max) => { 

	for(var i=0; i<3; i++){ 
		n.push(Math.floor(Math.random() * max) + min); 
	} 
	if (n[1] === n[2] && n[0] === n[1] && n[0] === n[2]) {
		console.log("three dices");

	}else if (n[0] === n[1] || n[0] === n[2] || n[1] === n[2]){
		console.log("two dices");

	//}else if(n[0] === n[2])  {
	//	console.log("two dics");
//
//	}else if(n[1] === n[2])  {
//		console.log("two dics");
	}else {
		console.log("to bad");
	}
	console.log(n);
}

 

randomNum(0,6);



