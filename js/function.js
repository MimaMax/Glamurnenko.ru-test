jQuery(function($) {
	$(window).scroll(function(){
	    if($(this).scrollTop()>700){
	        $('#top_nav').addClass('fixed');
	    }
	    else if ($(this).scrollTop()<700){
	        $('#top_nav').removeClass('fixed');
	    }
	});
});

$(document).ready(function(){
    
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    
});

