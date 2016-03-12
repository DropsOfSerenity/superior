//= require jquery
//= require_tree .

$(document).ready(function() {
	var body = $('body');
	var button = $('#toggleNav');

	$(button).click(function() {
		$(body).toggleClass('open');
	});

	// tabs
	var eztLink = $( ".ezt-nav a" );

  $(eztLink).click(function(e) {
    e.preventDefault();
    
    var ezTarget = $(this).closest('ul').attr('ezt');
    var ezTargetSelector = '[ezt="' + ezTarget + '"] ';
    var ezIndex = $(this).parent().index() + 1; 

    var currentlyActive = $(this).hasClass('ezt-active');

    if (!currentlyActive) {
      // update nav
      $(ezTargetSelector + 'li a').removeClass('ezt-active');
      $(ezTargetSelector + 'li:nth-child(' + ezIndex + ') a').addClass('ezt-active');
      //update content
      $(ezTargetSelector + '.ezt-content').removeClass('ezt-active');
      $(ezTargetSelector + '.ezt-content:nth-child(' + ezIndex + ')').addClass('ezt-active');
    }            
  });
});