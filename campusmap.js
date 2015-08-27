var stage = new Kinetic.Stage({
	container: 'container',
	width: 1360,
	height: 944
});

var layer = new Kinetic.Layer();
var imageObj = new Image();

var campus_map = new Kinetic.Image({
	x: 0,
	y: 0,
	image: imageObj,
	width: 1360,
	height: 944
});

// label with left pointer
var labelLeft = new Kinetic.Label({
	x: 195,
	y: 130,
	opacity: 0.75
});

labelLeft.add(new Kinetic.Tag({
	fill: 'white',
	pointerDirection: 'left',
	pointerWidth: 20,
	pointerHeight: 28,
	lineJoin: 'round'
}));

labelLeft.add(new Kinetic.Text({
	text: 'Label pointing left',
	fontFamily: 'Calibri',
	fontSize: 18,
	padding: 5,
	fill: 'Black'
}));



function clickRegion(reg) {
	window.open("information.html#"+reg,"_self");
}

/* ********** Packard Lab ********** */
var pin_packard = new Kinetic.Polygon({
	points: [233,380,237,380,238,381,239,381,242,384,242,389,241,390,241,391,240,392,240,393,239,394,239,395,238,396,238,397,237,398,237,399,236,400,236,401,235,402,234,401,234,400,233,399,233,398,232,397,232,396,231,395,231,394,230,393,230,392,229,391,229,390,228,389,228,385,229,384,229,383,231,381,232,381], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_packard.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_packard.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_packard.on('click', function(){
	clickRegion(0);
});

/* ********** Linderman Library ********** */
var pin_linderman = new Kinetic.Polygon({
	points: [338,438,342,438,343,439,344,439,347,442,347,447,346,448,346,449,345,450,345,451,344,452,344,453,343,454,343,455,342,456,342,457,341,458,341,459,340,460,339,459,339,458,338,457,338,456,337,455,337,454,336,453,336,452,335,451,335,450,334,449,334,448,333,447,333,443,334,442,334,441,336,439,337,439], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_linderman.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_linderman.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_linderman.on('click', function(){
	clickRegion(1);
});

/* ********** Goodman Stadium ********** */
var pin_goodman = new Kinetic.Polygon({
	points: [1245,633,1249,633,1250,634,1251,634,1254,637,1254,642,1253,643,1253,644,1252,645,1252,646,1251,647,1251,648,1250,649,1250,650,1249,651,1249,652,1248,653,1248,654,1247,655,1246,654,1246,653,1245,652,1245,651,1244,650,1244,649,1243,648,1243,647,1242,646,1242,645,1241,644,1241,643,1240,642,1240,638,1241,637,1241,636,1243,634,1244,634], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_goodman.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_goodman.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_goodman.on('click', function(){
	clickRegion(2);
});

/* ********** UC Front Lawn ********** */
var pin_ucfrontlawn = new Kinetic.Polygon({
	points: [284,461,288,461,289,462,290,462,293,465,293,470,292,471,292,472,291,473,291,474,290,475,290,476,289,477,289,478,288,479,288,480,287,481,287,482,286,483,285,482,285,481,284,480,284,479,283,478,283,477,282,476,282,475,281,474,281,473,280,472,280,471,279,470,279,466,280,465,280,464,282,462,283,462], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_ucfrontlawn.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_ucfrontlawn.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_ucfrontlawn.on('click', function(){
	clickRegion(3);
});

/* ********** STEPS ********** */
var pin_steps = new Kinetic.Polygon({
	points: [267,306,271,306,272,307,273,307,276,310,276,315,275,316,275,317,274,318,274,319,273,320,273,321,272,322,272,323,271,324,271,325,270,326,270,327,269,328,268,327,268,326,267,325,267,324,266,323,266,322,265,321,265,320,264,319,264,318,263,317,263,316,262,315,262,311,263,310,263,309,265,307,266,307], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_steps.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_steps.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_steps.on('click', function(){
	clickRegion(4);
});

/* ********** Taylor Gym ********** */
var pin_taylor = new Kinetic.Polygon({
	points: [453,396,457,396,458,397,459,397,462,400,462,405,461,406,461,407,460,408,460,409,459,410,459,411,458,412,458,413,457,414,457,415,456,416,456,417,455,418,454,417,454,416,453,415,453,414,452,413,452,412,451,411,451,410,450,409,450,408,449,407,449,406,448,405,448,401,449,400,449,399,451,397,452,397], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_taylor.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_taylor.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_taylor.on('click', function(){
	clickRegion(5);
});

/* ********** Alumni Memorial Inside ********** */
var pin_alumniinside = new Kinetic.Polygon({
	points: [170,440,174,440,175,441,176,441,179,444,179,449,178,450,178,451,177,452,177,453,176,454,176,455,175,456,175,457,174,458,174,459,173,460,173,461,172,462,171,461,171,460,170,459,170,458,169,457,169,456,168,455,168,454,167,453,167,452,166,451,166,450,165,449,165,445,166,444,166,443,168,441,169,441], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_alumniinside.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_alumniinside.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_alumniinside.on('click', function(){
	clickRegion(6);
});

/* ********** Zoellner ********** */
var pin_zoellner = new Kinetic.Polygon({
	points: [542,340,546,340,547,341,548,341,551,344,551,349,550,350,550,351,549,352,549,353,548,354,548,355,547,356,547,357,546,358,546,359,545,360,545,361,544,362,543,361,543,360,542,359,542,358,541,357,541,356,540,355,540,354,539,353,539,352,538,351,538,350,537,349,537,345,538,344,538,343,540,341,541,341], 
	fill: 'red',
	stroke: 'black',
	strokeWidth: 0,
});

pin_zoellner.on('mouseover', function(){
	document.body.style.cursor = 'pointer';
});

pin_zoellner.on('mouseout', function(){
	document.body.style.cursor = 'default';
});

pin_zoellner.on('click', function(){
	clickRegion(7);
});

imageObj.onload = function() {
	layer.add(campus_map);
	layer.add(pin_packard);
	layer.add(pin_linderman);
	layer.add(pin_goodman);
	layer.add(pin_ucfrontlawn);
	layer.add(pin_steps);
	layer.add(pin_taylor);
	layer.add(pin_alumniinside);
	layer.add(pin_zoellner);
	stage.add(layer);
	stage.draw();
};
imageObj.src="images/Lehigh_Campus_Map.jpg";