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
  	});

});