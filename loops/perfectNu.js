
let sum =0;

function perf (n) {

	// here the i will keep incressing and the n and will be diveied every itration
	for (var i = 1; i <= n / 2; i++) {
		 
	if (n % i === 0) {

		sum += i;
	}
}

	if (sum === n && n !== 0) {
		console.log("perfter number",sum);
	}else {
		console.log("ops");
	}
}




perf(496);





// function perfectNumber(n) {
//   let temp = 0
//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) {
//       temp += i
//     }
//   }
//   if (temp === n && temp !== 0) {
//     return "Yeeeeyyy!!! You found the perfect number!"
//   } else {
//     return "Buuhuuu, try again!!!"
//   }
// }

// console.log(perfectNumber(6))