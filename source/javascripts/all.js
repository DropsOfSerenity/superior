//= require jquery
//= require_tree .

$(document).ready(function() {
	var body = $('body');
	var button = $('#toggleNav');

	$(button).click(function() {
		$(body).toggleClass('open');
	});
});