var ctx = timbre.getContext('2d')

function loop() {
	timbre.width += 0;

	requestAnimationFrame(loop);
}

var colors = [
	"#FFA231",
	"#FFE1BC",
	"#442500",
	"#FF8C00",
	"#E88000",
	"#FF5C31",
	"#FFCABC",
	"#440E00",
	"#FF3500",
	"#E83000",
	"#FFCA31",
	"#FFEEBC",
	"#443200",
	"#FFBE00",
	"#E8AD00",
	"#2774A2",
	"#89A5B6",
	"#011B2B",
	"#057BC1",
	"#035E94"
	]

palette.innerHTML = colors.map(function(color) {

	return '<div class="palette" style="background:' + color + '"></div>'

}).join('\n')



