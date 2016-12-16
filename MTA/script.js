
$(".maindiv1").hover(function() {
$(".125st").show();
$(".time1").show();
$(".color1").css("opacity", "0.4");
},function(){
$(".125st").hide();
$(".time1").hide();
$(".color1").css("opacity", "0");
});


$(".maindiv2").hover(function() {
$(".86st").show();
$(".time2").show();
$(".color2").css("opacity", "0.4");
},function(){
$(".86st").hide();
$(".time2").hide();
$(".color2").css("opacity", "0");
});


$(".maindiv3").hover(function() {
$(".59st").show();
$(".time3").show();
$(".color3").css("opacity", "0.4");
},function(){
$(".59st").hide();
$(".time3").hide();
$(".color3").css("opacity", "0");
});


$(".maindiv4").hover(function() {
$(".42st").show();
$(".time4").show();
$(".color4").css("opacity", "0.4");
},function(){
$(".42st").hide();
$(".time4").hide();
$(".color4").css("opacity", "0");
});


$(".maindiv5").hover(function() {
$(".14st").show();
$(".time5").show();
$(".color5").css("opacity", "0.4");
},function(){
$(".14st").hide();
$(".time5").hide();
$(".color5").css("opacity", "0");
});


$(".maindiv6").hover(function() {
$(".brooklynbridge").show();
$(".time6").show();
$(".color6").css("opacity", "0.4");
},function(){
$(".brooklynbridge").hide();
$(".time6").hide();
$(".color6").css("opacity", "0");
});


$(".maindiv7").hover(function() {
$(".fulton").show();
$(".time7").show();
$(".color7").css("opacity", "0.4");
},function(){
$(".fulton").hide();
$(".time7").hide();
$(".color7").css("opacity", "0");
});


$(".maindiv8").hover(function() {
$(".wall").show();
$(".time8").show();
$(".color8").css("opacity", "0.4");
},function(){
$(".wall").hide();
$(".time8").hide();
$(".color8").css("opacity", "0");
});


$(".maindiv9").hover(function() {
$(".bowlinggreen").show();
$(".time9").show();
$(".color9").css("opacity", "0.4");
},function(){
$(".bowlinggreen").hide();
$(".time9").hide();
$(".color9").css("opacity", "0");
});




 $(document).ready(function() {   
 //one  
 
  window.setInterval (function() {
    for (var i = 0; i < 100; i++) {
  $(".squares1").append("<div class='square" + i + "'></div>")};
 }, 0);
 
 
  var doUpdate = function() {
    $('.time1').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 3;
      }  else if (count == 0) {
         var one = Math.floor(Math.random() * 4) + 2  
          count = one;
          $(this).html(count - 1 + " min");
          $(".squares1").children().remove();
    
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
    




 
//two

  window.setInterval (function() {
    for (var i = 0; i < 100; i++) {
   $(".squares2").append("<div class='one" + i + "'></div>")};
 }, 0);

  var doUpdate = function() {
    $('.time2').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 5;
      }  else if (count == 0) {
          var two = Math.floor(Math.random() * 7) + 3 
          count = two;
          $(this).html(count - 1 + " min");
          $(".squares2").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
    

 //three

   window.setInterval (function() {
     for (var i = 0; i < 100; i++) {
   $(".squares3").append("<div class='two" + i + "'></div>")};
 }, 0);

  var doUpdate = function() {
    $('.time3').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 1;
      }  else if (count == 0) {
          var three = Math.floor(Math.random() * 3) + 1 
          count = three;
          $(this).html(count - 1 + " min");
          $(".squares3").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);


 //four


   window.setInterval (function() {
        for (var i = 0; i < 100; i++) {
   $(".squares4").append("<div class='three" + i + "'></div>")};
 }, 0);

  var doUpdate = function() {
    $('.time4').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 7;
      }  else if (count == 0) {
          var four = Math.floor(Math.random() * 9) + 4 
          count = four;
          $(this).html(count - 1 + " min");
          $(".squares4").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
 
 
 //five

 
 
    window.setInterval (function() {
     for (var i = 0; i < 100; i++) {
   $(".squares5").append("<div class='four" + i + "'></div>")};
 }, 0);

  var doUpdate = function() {
    $('.time5').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 5;
      }  else if (count == 0) {
          var five = Math.floor(Math.random() * 6) + 3 
          count = five;
          $(this).html(count - 1 + " min");
          $(".squares5").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
 
 
 
 //six
 
    window.setInterval (function() {
        for (var i = 0; i < 100; i++) {
   $(".squares6").append("<div class='five" + i + "'></div>")};
 }, 0);

  var doUpdate = function() {
    $('.time6').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 0;
      }  else if (count == 0) {
          var six = Math.floor(Math.random() * 2) + 1 
          count = six;
          $(this).html(count - 1 + " min");
          $(".squares6").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
 
 
 
 //seven 
 
    window.setInterval (function() {
      for (var i = 0; i < 100; i++) {
   $(".squares7").append("<div class='six" + i + "'></div>")};
 }, 0);

 
  var doUpdate = function() {
    $('.time7').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 2;
      }  else if (count == 0) {
          var seven = Math.floor(Math.random() * 3) + 2 
          count = seven;
          $(this).html(count - 1 + " min");
          $(".squares7").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
 
 
 
 
 //eight 
 

 
  
    window.setInterval (function() {
      for (var i = 0; i < 100; i++) {
   $(".squares8").append("<div class='seven" + i + "'></div>")};
 }, 0);

  var doUpdate = function() {
    $('.time8').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 1;
      }  else if (count == 0) {
          var eight = Math.floor(Math.random() * 2) + 1
          count = eight;
          $(this).html(count - 1 + " min");
          $(".squares8").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
 
 
 
 
 //nine
 
     window.setInterval (function() {
          for (var i = 0; i < 100; i++) {
   $(".squares9").append("<div class='eight" + i + "'></div>")};
 }, 0);

  var doUpdate = function() {
    $('.time9').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
          $(this).html(count - 1 + " min");
        count = 4;
      }  else if (count == 0) {
          var nine = Math.floor(Math.random() * 6) + 2
          count = nine;
          $(this).html(count - 1 + " min");
          $(".squares9").children().remove();
      }
    });
  };
// Schedule the update to happen once every second
  setInterval(doUpdate, 60000);
 
 
 
 
 
 
// first div

setInterval(function(){
    var x =  Math.floor((Math.random()*21));
 $( ".square" + x).css("background-color", "#00933C");}, 50);

setInterval(function(){
    var x =  Math.floor((Math.random()*41));
 $( ".square" + x ).css("background-color", "#00933C");}, 100);

setInterval(function(){
    var x =  Math.floor((Math.random()*61));
 $( ".square" + x ).css("background-color", "#00933C");}, 150);


setInterval(function(){
    var x =  Math.floor((Math.random()*81));
 $( ".square" + x ).css("background-color", "#00933C");}, 200);


setInterval(function(){
    var x =  Math.floor((Math.random()*101));
  
 $( ".square" + x ).css("background-color", "#00933C");
}, 250);




//second div

setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".one" + y ).css("background-color", "#00933C");
}, 200);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".one" + y ).css("background-color", "#00933C");}, 400);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".one" + y ).css("background-color", "#00933C");}, 600);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".one" + y ).css("background-color", "#00933C");}, 800);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".one" + y ).css("background-color", "#00933C");}, 1000);

//third div 

setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".two" + y ).css("background-color", "#00933C");}, 30);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".two" + y ).css("background-color", "#00933C");}, 60);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".two" + y ).css("background-color", "#00933C");}, 90);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".two" + y ).css("background-color", "#00933C");}, 120);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".two" + y ).css("background-color", "#00933C");}, 150);

//fourth div

setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".three" + y ).css("background-color", "#00933C");}, 300);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".three" + y ).css("background-color", "#00933C");}, 600);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".three" + y ).css("background-color", "#00933C");}, 900);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".three" + y ).css("background-color", "#00933C");}, 1200);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".three" + y ).css("background-color", "#00933C");}, 1500);

//fifth div

setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".four" + y ).css("background-color", "#00933C");}, 200);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".four" + y ).css("background-color", "#00933C");}, 400);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".four" + y ).css("background-color", "#00933C");}, 600);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".four" + y ).css("background-color", "#00933C");}, 800);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".four" + y ).css("background-color", "#00933C");}, 1000);

//sixth div
setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".five" + y ).css("background-color", "#00933C");}, 7);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".five" + y ).css("background-color", "#00933C");}, 14);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".five" + y ).css("background-color", "#00933C");}, 21);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".five" + y ).css("background-color", "#00933C");}, 28);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".five" + y ).css("background-color", "#00933C");}, 35);
 
 //seventh div 
 setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".six" + y ).css("background-color", "#00933C");}, 40);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".six" + y ).css("background-color", "#00933C");}, 80);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".six" + y ).css("background-color", "#00933C");}, 12);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".six" + y ).css("background-color", "#00933C");}, 240);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".six" + y ).css("background-color", "#00933C");}, 280);
 
 
 //eight div
  setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".seven" + y ).css("background-color", "#00933C");}, 30);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".seven" + y ).css("background-color", "#00933C");}, 60);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".seven" + y ).css("background-color", "#00933C");}, 90);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".seven" + y ).css("background-color", "#00933C");}, 120);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".seven" + y ).css("background-color", "#00933C");}, 150);
 
 
 //ninth div
   setInterval(function(){
    var y =  Math.floor((Math.random()*21));
 $( ".eight" + y ).css("background-color", "#00933C");}, 60);

setInterval(function(){
    var y =  Math.floor((Math.random()*41));
 $( ".eight" + y ).css("background-color", "#00933C");}, 120);

setInterval(function(){
    var y =  Math.floor((Math.random()*61));
 $( ".eight" + y ).css("background-color", "#00933C");}, 180);


setInterval(function(){
    var y =  Math.floor((Math.random()*81));
 $( ".eight" + y ).css("background-color", "#00933C");}, 240);


setInterval(function(){
    var y =  Math.floor((Math.random()*101));
 $( ".eight" + y ).css("background-color", "#00933C");}, 300);
 
 
 
});
