// Variables
var taglines = ["Is Moving Forward", "Begins Today", "Is With Your Future"];
var index = 0;

$('#modal').mouseenter(function() {
	$('#logoOrange').animate({marginLeft: "80%"}); 
	$('#homeHero h1:nth-of-type(2)').html(taglines[index]); 
	index = (index + 1) % taglines.length ;
	console.log('mouseEnter');
});

$('#modal').mouseleave(function() {
	$('#logoOrange').animate({marginLeft: "10px"});
console.log('mouseLeave');
});





// var $ =  jQuery;
//Fit Text
$(".tagline > h1:nth-of-type(1)").fitText(0.75, {minFontSize: '18px', maxFontSize: '50px' });
$(".tagline > h1:nth-of-type(2)").fitText(1.0, {minFontSize: '18px', maxFontSize: '50px' });

$("h2.zone2").fitText(2);
$("h2").fitText(2,  { minFontSize: '12px', maxFontSize: '40px' });

$("#services p").fitText(4,  { minFontSize: '12px', maxFontSize: '20px' });
$("#menu-trigger").fitText(1,  { minFontSize: '12px', maxFontSize: '30px' });








