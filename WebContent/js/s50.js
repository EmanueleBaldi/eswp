/**
 * s50.js
 * 
 * Slide 50
 */
$(function() {
    $('#colorOn').click(function() {
        $('#msg1').addClass('red');
    });

    $('#colorOff').click(function() {
        $('#msg1').removeClass('red');
    });

    $('#swapColor').click(function() {
        $('#msg2').toggleClass('red');
    });
    
    $('#switchColor').click(function() {
    	if ($('#msg3').hasClass('red')) {
    		$('#msg3').removeClass('red');
        	$('#msg3').addClass('yellow');
    	} else if ($('#msg3').hasClass('yellow')) {
    		$('#msg3').removeClass('yellow');
        	$('#msg3').addClass('red');
    	}  else {
    		$('#msg3').addClass('red');
      	}
    })
    
    $('#alfonsoRed').click(function() {
    	$('#alfonso').removeClass('yellow');
    	$('#alfonso').addClass('red');
    })
    
    $('#alfonsoYellow').click(function() {
    	$('#alfonso').removeClass('red');
    	$('#alfonso').addClass('yellow');
    })
});
