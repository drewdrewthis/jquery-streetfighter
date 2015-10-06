$( document ).ready(function() {

	function hideAllRyu() {
    	$('.ryu-ready').hide();
  		$('.ryu-throwing').hide();
  		$('.ryu-cool').hide();
  		$('.ryu-still').hide();
  		console.log('all hidden');
    };

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

    doIntro();

    $('.ryu').mouseenter(function() {
    	console.log('mouse entered .ryu div');
    	hideAllRyu();
		$('.ryu-ready').show();
    })
    .mouseleave(function() {
    	console.log('mouse left');
    	hideAllRyu();
		$('.ryu-still').show();
		$('.instructions').show();
  	})
  	.mousedown(function() {
  		console.log('mousedown');
  		playHadouken();
  		hideAllRyu();
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
    

    $( document ).mouseup(function() {
    	console.log('mouseup')
    	hideAllRyu();
    	$('.ryu-ready').show();
		$('.instructions').show();
    });

	$(document).keydown(function(event) {
		console.log("Key Pressed");
		if(event.keyCode == 88) {
			console.log("X Key Pressed");
			playCool();
			hideAllRyu();
			$('.ryu-cool').show();
		}
		else {
			console.log(event.which + " Key Code Pressed");
		};
	})
	.keyup(function(event) {
		if(event.keyCode == 88) {
			console.log("Key Up");
			hideAllRyu();
			$('.ryu-ready').show();
			$('#cool-song')[0].pause();
	      	$('#cool-song')[0].load();
	    };
	});

});