$("body").css("background-color","blue");

for (var i =0; i<1000; i++){
 $("body").append("<div class='box'></div>");   
}


var opacity = 0;

// $(".box").slice(500).each(function(){
//     opacity += .001;
//     $("this").css("opacity", opacity);
// console.log("found a box.."+ opacity);
// });


$(".box").each(function() {
    opacity += .001; // opacity = opacity + .001;
    $(this).css("opacity", opacity); // stacks opacity value;
    console.log("found a box..." + opacity);
});

// $(".box").css("opacity", ".5");

//.slice(500).each(function(){




for (var i =0; i<10; i++){
 $("body").append("<div class='snowflake'></div>");   
}

$("snowflake").each(function(){
    var crystalcount = Math.floor(Math.random()*14) + 6;
    for(var c = 0; c < crystalcount; c++){
    $(this).append("<div class='crystal'></div>");
    }
     $(this).css("top", Math.floor(Math.random()*1000) + "px" );
     $(this).css("left", Math.floor(Math.random()*1000) + "px" );
});


$(".snowflake").each(function(){
    var rotation = 0;
    var crystallength = $(this).find(".crystal").length;
    $(this).find(".crystal").each(function(){
          var newrotation = "rotate(" +rotation + "deg)";
    $(this).css("transform", newrotation);
   rotation += 180/crystallength;
    });
  
});