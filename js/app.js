$( document ).ready(function() {
    //$('div.ryu-throwing').hide();
    //$('div.ryu-still').hide();
    //$('div.hadouken').hide();

    $('.ryu').mouseenter(function() {
    	console.log('mouse entered .ryu div');
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
    })
    .mouseleave(function() {
    	console.log('mouse left');
    	$('.ryu-ready').hide();
		$('.ryu-still').show();
  	})
  	.mousedown(function() {
  		console.log('mousedown');
  		// play hadouken sound
  		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show().animate(
  			{'left':'2020px'},
  			1000,
  			function() {
  				$(this).hide();
  				$(this).css('left','600px');
  			}
  		);
    	// animate hadouken to the right of the screen
    })
    .mouseup(function() {
    	console.log('mouseup')
    	$('.ryu-throwing').hide();
    	$('.ryu-ready').show();
    })

});