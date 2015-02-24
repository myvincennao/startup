var Movie = require("./movie.jsm");
function MovieObserver(){
	var playing = false;
	var movie = '';
}
MovieObserver.prototype = {
	constructor:MovieObserver,
	currentMovie: function(){
		console.log(this.movie);
		return this.movie;
	},
	startMovie: function(title){
		if (this.playing) {
			console.log('Movie ' + this.movie + 'is already playing');
			return('Movie ' + this.movie + 'is already playing');
		}	else {
			this.movie = title;
			this.playing = true;
		}		 
	},
	stopMovie: function(){
		this.playing = false;
		this.movie = '';
	}
}
var player = new MovieObserver();
var terminator = new Movie('Terminator', '192', player);
var frozen = new Movie('Frozen','130', player);
terminator.play();
frozen.stop();
terminator.play();
terminator.stop();