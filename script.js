// jQuery

$(document).ready( function() {
	$('#revealButton').on('click', function() {
			$(document).find('main').slideToggle();
			$(document).find('.navFileLinks').slideToggle();
			$(document).find('.navContactInfo').slideToggle();



	});
});


/*  $('li').toggleClass('highlight')

$(document).ready( function() {
    $(’.confirmation).on(‘click’, ‘button’, function () {
        $(this).closest(‘.confirmation’).find(‘.ticket’).slideDown(); 
    });
});


 $(document).ready(function() {
   alert($('button').length);
   $('.confirmation').on('click', 'button', function() {
     $(this).closest('.confirmation').find('.ticket').slideDown();
   }); });  */