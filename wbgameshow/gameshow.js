$(document).ready(function(){

		whichKeypress();
		resetListener();

});

function whichKeypress(){
	$(document).one('keydown' ,function(e){
		switch (e.which){
			case 49:
				$('#winner').append('<img src="images/1.jpg"/>');
				break;
			case 50:
				$('#winner').append('<img src="images/2.jpg"/>');
				break;
			case 51:
				$('#winner').append('<img src="images/3.jpg"/>');
				break;
			case 52:
				$('#winner').append('<img src="images/4.jpg"/>');
				break;
			case 53:
				$('#winner').append('<img src="images/5.jpg"/>');
				break;
			case 54:
				$('#winner').append('<img src="images/6.jpg"/>');
				break;
			case 55:
				$('#winner').append('<img src="images/7.jpg"/>');
				break;
			case 56:
				$('#winner').append('<img src="images/8.jpg"/>');
				break;
			default:
				whichKeypress();
		}
		playSound (e.which);
	});
	return true;
}

function refresh(){
	window.location.reload();	
}

function resetListener(){
	$(document).keydown(function(e){
		if (e.which === 32){
			refresh();
		}
	});
}

function playSound(e){
	var audio = new Audio;
	switch (e){
		case 49:
			audio.src = 'audio/1.mp3';
			break;
		case 50:
			audio.src = 'audio/2.mp3';
			break;
		case 51:
			audio.src = 'audio/3.mp3';
			break;
		case 52:
			audio.src = 'audio/4.mp3';
			break;
		case 53:
			audio.src = 'audio/5.mp3';
			break;
		case 54:
			audio.src = 'audio/6.mp3';
			break;
		case 55:
			audio.src = 'audio/7.mp3';
			break;
		case 56:
			audio.src = 'audio/8.mp3';
			break;
		default:
			audio.src = '';
	}
    audio.load();
	audio.play();
}