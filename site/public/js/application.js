var data = [
	['#0071BC', 'UX'],
	['#0B476F', 'UI'],
	['#6F0B5C', 'Visual'],
	['#646F16', 'Product']
];


$( document ).ready(function() {
	changeData(0);
});


function changeData(n) {
	var d = data[n];
	var color = d[0];
	var text = d[1];
	$('#designDescription').css({background: color});
	$("#designer-title").text(text);
	n = (n+1) % data.length;
	setTimeout(changeData, 2000, n)
}