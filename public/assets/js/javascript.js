var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var cw = canvas.width;
var ch = canvas.height;

var canvases = document.getElementsByClassName("myCanvas");
for (var i = 0; i < canvases.length; i++) {
	canvases[i].onclick = function(e) {
		var oldcan = document.getElementById("myCanvas")
		oldcan.removeAttribute("id");
		oldcan.setAttribute("style","border-radius:none;");
		e.target.setAttribute("id", "myCanvas");
		canvas = document.getElementById("myCanvas");
		canvas.setAttribute("style","border-radius:10px;");
		ctx = canvas.getContext('2d');
		cw = canvas.width;
		ch = canvas.height;
	};
};

document.getElementById("button1").addEventListener("click", function() {
    var height = canvas.offsetHeight;
    var width = canvas.offsetWidth;
    var growth = height + 50;
    var large = width + 50;
    canvas.style.width = large + 'px';
    canvas.style.height = growth + 'px';
});

document.getElementById("button2").addEventListener("click", function() {
	canvas.style.opacity = 1;
  	ctx.fillStyle = "blue";
  	ctx.fillRect(0, 0, cw, ch);
});

document.getElementById("button3").addEventListener("click", function() {
	canvas.style.opacity = 0.3;
});

document.getElementById("button4").addEventListener("click", function() {
	canvas.style.opacity = 1;
	var grd = ctx.createLinearGradient(0, 0, 0, ch);
		grd.addColorStop(0, "red");
		grd.addColorStop(.18, "orange");
		grd.addColorStop(.36, "yellow");
		grd.addColorStop(.54, "green");
		grd.addColorStop(.69, "blue");
		grd.addColorStop(.87, "indigo");
		grd.addColorStop(1, "violet");
	
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, cw, ch);

});

document.getElementById("button5").addEventListener("click", function() {
	canvas.style.opacity = 1;
	ctx.fillStyle = "black"
	ctx.font = "50px Arial black";
	ctx.fillText("Wonderful!",10,50);

});	

document.getElementById("button6").addEventListener("click", function() {
  	canvas.reset = location.reload();
});