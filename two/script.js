
var timer = 0;
var counter = 0;
var numbers = [];

for (var x=0; x<2; x++){
    numbers.push(x);
}

for (var i=0; i<20; i++){
    setTimeout(function(){

var lines= "";
for (var s=0; s<100; s++){
    if (Math.random()*4<2){
        lines += "$$";
    }else{
        lines += "!!";
    }
}


console.log(lines);

    }, timer);
    timer += 10;
    counter++;
}
