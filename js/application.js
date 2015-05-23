var data = [
	['#0B476F', 'UX'],
	['#A42B44', 'UI'],
	['#6F0B5C', 'Visual'],
	['#F1C40F', 'Product']
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
	setTimeout(changeData, 1100, n)
}