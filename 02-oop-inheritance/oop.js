function Movie (title, duration, player){
	this['title'] = title;
	this['duration'] = duration;
	this['player'] = player;
}
Movie.prototype = {
	constructor:Movie,
	play: function() {
		this.player.startMovie(this.title);
		console.log("Playing: " + this.title);
		return("Playing: " + this.title);
	},
	stop: function() {
		if (this.title == this.player.movie) {
			this.player.stopMovie();
			console.log("Stopped Movie: " + this.title);
			return ("Stopped Movie: " + this.title);
		} else {
			console.log("This movie isn't playing");
			return ("This movie isn't playing");
		}
	},
	set: function(attr, value){
		this[attr] = value;
	},
	get: function(attr){
		console.log(this[attr]);
		return this[attr];
	}
}
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
