	let numTiri=0;
	let numWin=0;
	
$(function(){
	$('#roll').click(function() {
	let tiro = Math.floor((Math.random() * 6) + 1);
	$('#numero').val(tiro);
	
	if (tiro <= 3 ) {
		$('#results').css({color: 'red'}).val('You lose');
	} else {
		$('#results').css({color: '#00ca00'}).val('You win');
	}
	
	if (tiro <= 3 ) {
		$('<div>You lose</div>').css({color: 'red'}).appendTo('body');
	} else {
		$('<div>You win</div>').css({color: '#00ca00'}).appendTo('body');
	}
	

	if (tiro <= 3 ) {
		numTiri++;
		
		
	} else {
		numWin++;
		numTiri++;
	}
	let winPerc=(numWin/numTiri)*100;
	$('#win').val(winPerc);
	});

});