$( document ).ready(function() {
    doIntro();

    $('.ryu').mouseenter(function() {
    	console.log('mouse entered .ryu div');
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
    })
    .mouseleave(function() {
    	console.log('mouse left');
    	$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.instructions').show();
  	})
  	.mousedown(function() {
  		console.log('mousedown');
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('.instructions').hide();
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
		$('.instructions').show();
    });

    function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	};

	function playCool () {
		$('#theme-song')[0].pause();
		// $('#cool')[0].load()
		$('#cool-song')[0].volume = 0.5;
		$('#cool-song')[0].play();
	};

	function doIntro() {
	  $('#theme-song')[0].volume = 0.3;
	  $('#theme-song')[0].load();
	  $('#cool-song')[0].load();
	  $('#theme-song')[0].play();
	};

	$(document).keydown(function(event) {
		console.log("Key Pressed");
		if(event.keyCode == 88) {
			console.log("X Key Pressed");
			playCool();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
		else {
			console.log(event.which + " Key Code Pressed");
		};
	})
	.keyup(function(event) {
		console.log("Key Up");
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
		$('#cool-song')[0].pause();
      	$('#cool-song')[0].load();
	});

});