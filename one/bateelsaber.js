////////////////////////////////////////////////////////////////////
// bateelsaber.js
//
// basic bateelsaber tool: draws rectangles in random sizes
// author: Bateel Saber



////////////////////////////////////////////////////////////////////
// create and install brush

var bateelsaber = new Brush("bateelsaber",
	"bateelsaber.svg");
brushes.push(bateelsaber);



////////////////////////////////////////////////////////////////////
// define brush behavior

bateelsaber.draw = function() {
	noFill(0,0,0);
	stroke(forecolor);

	if (mouseIsPressed) {
		rect(pmouseX, pmouseY, 1, 20);

	}
};
