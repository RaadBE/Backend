let throww = 6;
let time = 100;
let track = 0;

for (var i = 0; i < time;i++) {

	
    let tryy = Math.floor(Math.random() * 6) + 1;
    if (tryy == throww) {
    track++;
}
}



console.log('the dice rolled '+ time+' times '+' and the number:'+ throww + ' came up:'+ track+' times');




