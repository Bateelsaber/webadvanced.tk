// function sayHello() {
// console.log("hello world");
// }

// function addNums(num1, num2) {
//     console.log(num1 + num2);
//     return (num1 - num2);
    
// }

// var mySum = addNums(10,20);

// var fruits = ["Apple", "Orange", "Carrot"];

// var person = {
//     name: "Bateel",
//     age: "21",
//     gender: "Female",
//     parsons: true,
//     true: "parsons",
//     favoritefoods: ["banana", "peaches", "coffee"]
    
// }

$("body").css("background-color","#ff9898");
$("h1").html("hello world");
$("h1").css("color","white");


// $("h1").hover(function(){
// $("h1").addClass("background-color", "white");
// },function(){
// $("h1").removeClass("background-color", "white");
// });

var clicks= 1;
$("h1").click ( function(){
console.log("you clicked it...");
clicks++;
});
